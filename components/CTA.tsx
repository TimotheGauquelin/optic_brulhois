import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTA({
  title = "Besoin d'un rendez-vous ?",
  description = "Prenez rendez-vous dès aujourd'hui pour un examen de la vue ou pour choisir vos nouvelles lunettes.",
  buttonText = "Prendre rendez-vous",
  buttonLink = "#contact",
}: CTAProps) {
  return (
    <section className="bg-primary text-white ">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">{description}</p>
        <a href={buttonLink} className="btn-secondary">
          {buttonText}
        </a>
      </div>
    </section>
  );
}

