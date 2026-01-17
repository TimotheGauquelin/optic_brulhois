import type { Metadata } from "next";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Coordonnees from "@/components/Coordonnees";
import siteData from "@/data/site-data.json";

export const metadata: Metadata = {
  title: "Nos services",
  description: "Découvrez tous nos services d'opticien à Layrac : examen de la vue, lunettes sur mesure, lentilles de contact, verres progressifs, réparation et ajustement.",
  openGraph: {
    title: "Services - L'Optic du Brulhois",
    description: "Découvrez tous nos services d'opticien à Layrac : examen de la vue, lunettes sur mesure, lentilles de contact.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white ">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Des services complets pour prendre soin de votre vision à Layrac
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className=" bg-background-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.services.map((service) => (
              <div
                key={service.id}
                className="bg-background-secondary p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  {service.title}
                </h2>
                <p className="leading-relaxed opacity-80">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className=" bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un accompagnement personnalisé
            </h2>
            <p className="text-lg mb-6 opacity-80">
              Chez L'Optic du Brulhois, nous mettons un point d'honneur à vous offrir un service personnalisé. 
              Que vous ayez besoin d'un simple ajustement ou d'un examen complet de la vue, notre équipe 
              d'opticiens diplômés est là pour vous conseiller et vous accompagner.
            </p>
            <p className="text-lg opacity-80">
              Nous travaillons avec les meilleures marques françaises pour vous garantir qualité et durabilité. 
              N'hésitez pas à nous contacter pour toute question ou pour prendre rendez-vous.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Coordonnées */}
      <Coordonnees />

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}

