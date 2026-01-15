"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // En production, vous devrez configurer un service d'email (EmailJS, Resend, etc.)
      // Pour l'instant, on simule l'envoi
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Ici, vous pouvez ajouter l'intégration avec votre service d'email
      // Exemple avec mailto (temporaire)
      const mailtoLink = `mailto:contact@optic-brulhois.fr?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Nom: ${data.name}\nEmail: ${data.email}\nTéléphone: ${data.phone}\n\nMessage:\n${data.message}`)}`;
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-[112px] bg-background-secondary">
      <div className="container-custom flex justify-between items-center bg-white p-8 rounded-lg shadow-lg">
        <div className="w-1/2">
          <div className="">
            <span className="text-primary font-bold">Contact</span>
            <h2 className="text-3xl">
              Prenons
              <span className="text-primary"> rendez-vous </span>
              !
            </h2>
            <span className="text-lg">
              Pour toute question, nous restons à votre écoute
            </span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg">
            <div>
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

            <div>
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

            <div>
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

            <div>
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

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Le message est requis" })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 bg-secondary text-white p-6 rounded-lg font-bold hover:bg-secondary/80 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Message envoyé avec succès ! Nous vous répondrons rapidement.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.
              </div>
            )}
          </form>
        </div>
        <div className="w-1/2">
          <Image src="/images/logo_terracota_color.svg" alt="About Us" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}

