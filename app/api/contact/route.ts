import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!token) {
    return false;
  }

  try {
    const params = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY || "",
      response: token,
    });

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await response.json();
    return data.success === true && data.score >= 0.5;
  } catch (error) {
    console.error("Erreur vérification reCAPTCHA:", error);
    return false;
  }
}

interface ContactRequestBody {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  terms: boolean;
  recaptchaToken: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, phone, subject, message, terms, recaptchaToken } = body;

    if (!terms) {
      return NextResponse.json(
        { error: "Vous devez accepter les conditions pour envoyer le formulaire" },
        { status: 400 }
      );
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      );
    }

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Vérification de sécurité requise" },
        { status: 400 }
      );
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: "Vérification de sécurité échouée. Veuillez réessayer." },
        { status: 400 }
      );
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    const subjectMap: Record<string, string> = {
      "rdv-examen": "Prise de rendez-vous - Examen de la vue",
      "rdv-essayage": "Prise de rendez-vous - Essayage lunettes",
      "renseignement": "Demande de renseignements",
      "reparation": "Réparation / Ajustement",
      "autre": "Autre",
    };

    const subjectLabel = subjectMap[subject] || subject;

    const emailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { margin: 0 auto; padding: 20px; }
            .header { background-color: #C3592D; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #C3592D; }
            .message-box { background-color: white; padding: 15px; border-left: 4px solid #C3592D; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${subjectLabel}</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nom:</span> ${escapeHtml(name)}
              </div>
              <div class="field">
                <span class="label">Email:</span> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
              </div>
              ${phone ? `<div class="field"><span class="label">Téléphone:</span> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></div>` : ""}
              <div class="field">
                <span class="label">Sujet:</span> ${escapeHtml(subjectLabel)}
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">${escapeHtml(message).replace(/\n/g, "<br>")}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "timothegauquelin@gmail.com",
      replyTo: email,
      subject: `Nouveau message de contact - ${subjectLabel}`,
      html: emailContent,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email envoyé avec succès", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message" },
      { status: 500 }
    );
  }
}

