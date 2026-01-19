"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  terms: boolean;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    // Charger le script reCAPTCHA seulement si la clé est définie
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      console.warn("NEXT_PUBLIC_RECAPTCHA_SITE_KEY n'est pas définie");
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setRecaptchaLoaded(true);
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Nettoyer le script si le composant est démonté
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Obtenir le token reCAPTCHA
      let recaptchaToken = "";
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (siteKey && recaptchaLoaded && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(siteKey, { action: "submit" });
        } catch (error) {
          console.error("Erreur reCAPTCHA:", error);
          setErrorMessage("Erreur de vérification. Veuillez réessayer.");
          setSubmitStatus("error");
          setIsSubmitting(false);
          return;
        }
      } else if (siteKey && !recaptchaLoaded) {
        setErrorMessage("Vérification de sécurité en cours de chargement. Veuillez patienter.");
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || "Une erreur est survenue lors de l'envoi du message");
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setErrorMessage("Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background-secondary ">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg flex">
          <div className="w-full md:w-1/2 p-4 md:p-8 space-y-4 md:space-y-8">
            <div>
              <span className="text-primary font-bold">Contact</span>
              <div className="space-y-[16px]">
                <h2 className="text-3xl leading-none">
                  Prenons
                  <span className="text-primary"> rendez-vous </span>
                  !
                </h2>
                <span className="text-lg">
                  Pour toute question, nous restons à votre écoute
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg space-y-4">
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Le nom est requis" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "L'email est requis",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email invalide",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  {...register("subject", { required: "Le sujet est requis" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="rdv-examen">Prise de rendez-vous - Examen de la vue</option>
                  <option value="rdv-essayage">Prise de rendez-vous - Essayage lunettes</option>
                  <option value="renseignement">Demande de renseignements</option>
                  <option value="reparation">Réparation / Ajustement</option>
                  <option value="autre">Autre</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  placeholder="Ecrivez votre message..."
                  rows={5}
                  {...register("message", { required: "Le message est requis" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  {...register("terms", {
                    required: "Vous devez accepter les conditions pour envoyer le formulaire",
                  })}
                  className="mt-1 mr-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-500">
                  En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour vous répondre.{" "}
                  <a href="/politique-confidentialite" className="hover:text-primary hover:underline">
                    En savoir plus
                  </a>
                  *
                </label>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-600">{errors.terms.message}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-fit text-base bg-secondary text-white p-4 rounded-lg hover:bg-secondary/80 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-[#d7e8c2] border border-secondary text-secondary rounded-lg">
                  Message envoyé avec succès ! Nous vous répondrons rapidement.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {errorMessage || "Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone."}
                </div>
              )}
            </form>
          </div>
          <div className="hidden md:block md:w-1/2 border-l-2 border-primary">
            <Image src="/images/magasin_conseil.png" alt="About Us" width={500} height={500} className="w-full h-full object-cover rounded-r-lg" />
          </div>
        </div>
      </div>
    </section >
  );
}

