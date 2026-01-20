import type { Metadata } from "next";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Coordonnees from "@/components/Coordonnees";
import siteData from "@/data/site-data.json";
import AnimatedImage from "@/components/AnimatedImage";

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
      <div className="bg-white">
        <div id="jumbotron" className="jumbotron-custom mx-auto">
          <h1 className="text-3xl font-bold">
            Nos <span className="text-primary">services</span>
          </h1>
          <p className="text-lg">
            A l’Optic du Brulhois, nous vous proposons des solutions personnalisées pour prendre soin de votre vision, alliant expertise, conseils sur mesure et équipements de qualité.
          </p>
        </div>

        <section className="container-custom mx-auto space-y-20">
          {siteData.services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} id={service.id} className={`flex flex-col md:flex-row items-start justify-between gap-10 ${!isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
                <div className="w-full md:w-2/3 space-y-4">
                  <div className="text-secondary leading-none font-bold flex items-center gap-4">
                    {service.icon.startsWith("<svg") ? (
                      <div dangerouslySetInnerHTML={{ __html: service.icon }} className="w-12 h-12 text-secondary" />
                    ) : (
                      service.icon
                    )}
                    <h2 className="text-2xl font-bold">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg">
                    {service.description}
                  </p>
                </div>
                <div className="w-full md:w-1/3 rounded-lg">
                  <AnimatedImage
                    src={service.image ?? ""}
                    alt={service.title}
                    width={500}
                    height={500}
                    animationType="fadeIn"
                    className="rounded-lg border-primary border-2"
                  />
                </div>
              </div>
            );
          })}
        </section>

        <CTA />
        <Coordonnees />
        <ContactForm />
      </div >
    </>
  );
}

