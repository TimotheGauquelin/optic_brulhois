import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Coordonnees from "@/components/Coordonnees";
import siteData from "@/data/site-data.json";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import KeyNumber from "@/components/KeyNumber";
import TestimonyCarousel from "@/components/TestimonyCarousel";
import AnimatedImage from "@/components/AnimatedImage";
import AnimatedServiceGrid from "@/components/AnimatedServiceGrid";

export const metadata: Metadata = {
  title: "L'Optic du Brulhois - Opticienne à Layrac",
  description: "L'Optic du Brulhois, votre opticienne de confiance à Layrac. Examen de la vue, lunettes sur mesure, lentilles de contact. Large choix de marques françaises.",
  openGraph: {
    title: "L'Optic du Brulhois - Opticienne à Layrac",
    description: "Opticienne professionnelle à Layrac. Examen de la vue, lunettes sur mesure, lentilles de contact.",
  },
};

export default function HomePage() {

  return (
    <>
      <section id="jumbotron" className="bg-background-secondary">
        <div className="container-custom mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-[40px]">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Une
              <span className="text-primary"> expertise </span>
              au service de votre regard
            </h1>
            <p className="text-lg">
              Opticienne diplômée, je vous accompagne dans le choix de lunettes et de solutions visuelles adaptées à vos besoins.
              Conseils personnalisés, qualité des verres et confort visuel sont au cœur de mon engagement.            </p>
            <div className="flex flex-row gap-4">
              <Link href="#a_propos" className="inline-blockh-fit bg-secondary text-white p-6 rounded-lg font-bold hover:bg-secondary/80 transition-colors duration-200 shadow-lg hover:shadow-xl">
                En savoir plus
              </Link>
              <Link href="#contact" className="inline-block h-fit border-secondary border-4 text-secondary p-5 rounded-lg font-bold shadow-lg hover:shadow-xl">
                Où nous trouver
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <Image
              src="/images/logo_terracota_color.svg"
              alt="About Us"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section id="a_propos" className=" bg-white">
        <div className="container-custom space-y-10">
          <div>
            <span className="text-primary font-bold">A propos</span>
            <h2 className="text-3xl leading-none ">
              Qui <span className="text-primary">sommes-nous</span> ?
            </h2>
          </div>
          <div className="flex items-center justify-between gap-40">
            <div className="w-full md:w-1/2 space-y-[40px]">
              <p>
                Opticienne de proximité, engagée à prendre soin de votre vision avec sérieux et bienveillanc, nous vous accompagnons à chaque étape:
                du contrôle de la vue au choix de vos lunettes ou lentilles, en vous proposant des solutions adaptées à vos besoins et à votre style de vie.
              </p>
              <p>
                À l’écoute, disponibles et passionnés par notre métier, nous mettons un point d’honneur à offrir des conseils personnalisés, des équipements de qualité et un suivi attentif, dans un cadre convivial et professionnel.
              </p>
              <p>
                Parce que chaque regard est unique, nous privilégions une relation de confiance durable avec nos clients, fondée sur la proximité, la transparence et le sens du service, afin de vous garantir confort visuel et sérénité au quotidien.
              </p>
            </div>
            <div className="hidden md:block md:w-1/2 rounded-lg overflow-hidden">
              <AnimatedImage
                src="/images/magasin_devanture.jpg"
                alt="About Us"
                width={500}
                height={500}
                className="w-full h-full border-2 border-primary object-cover rounded-lg"
                animationType="fadeIn"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-secondary">
        <div className="container-custom flex flex-col space-y-10">
          <div className="text-center">
            <span className="text-primary font-bold">Nos Services</span>
            <div className="space-y-[16px]">
              <h2 className="text-3xl leading-none ">
                Un <span className="text-primary">accompagnement visuel</span> complet, du contrôle de la vue au choix de vos équipements
              </h2>
              <p className="text-lg">
                A l’Optic du Brulhois, nous vous proposons des solutions personnalisées pour prendre soin de votre vision,
                alliant expertise, conseils sur mesure et équipements de qualité.
              </p>
            </div>
          </div>
          <AnimatedServiceGrid services={siteData.services.slice(0, 4)} />
          <div className="text-center mt-8">
            <Link href="/services" className="inline-block h-fit bg-secondary text-white p-6 rounded-lg font-bold hover:bg-secondary/80 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      <section id="marques" className=" bg-background-primary">
        <div className="container-custom">
          <div className="text-left flex flex-col space-y-10">
            <div>
              <span className="text-primary font-bold">Nos marques</span>
              <div className="space-y-[16px]">
                <h2 className="text-3xl leading-none">
                  Une panoplie de
                  <span className="text-primary"> marques françaises</span>
                </h2>
                <p className="text-lg">
                  Nous privilégions la qualité en vous proposant des lunettes produites en France
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteData.brands.slice(0, 4).map((brand) => (
                <div key={brand.id} className="py-6 px-3 border-1 border-black space-y-4 flex flex-col items-center justify-center shadow-[0px_1px_12px_rgba(0,0,0,0.4)]">
                  <div className="w-full rounded-lg border-1 border-[#A0A0A0]">
                    <Image
                      src={brand.image ?? ""}
                      alt={brand.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <p className="text-base font-bold">{brand.name}</p>
                </div>
              ))}
            </div>
            <Link href="/services" className="inline-block w-fit mx-auto bg-secondary text-white p-6 rounded-lg font-bold hover:bg-secondary/80 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Découvrir toutes nos marques
            </Link>
          </div>
        </div>
      </section>

      <section className=" bg-background-primary">
        <div className="container-custom flex items-center gap-[40px]">
          <div className="w-full md:w-1/2">
            <div className="text-left">
              <span className="text-primary font-bold">Quelques chiffres</span>
              <div className="space-y-[16px]">
                <h2 className="text-3xl leading-none">
                  Les
                  <span className="text-primary"> chiffres-clef </span>
                  de notre boutique
                </h2>
                <p className="text-lg">
                  Des repères clairs pour mieux nous connaître
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KeyNumber number="2025" description="l'année d'ouverture de la boutique" animate={false} />
                <KeyNumber symbol="+" number="600" description="de lunettes à votre vue" />
                <KeyNumber symbol="+" number="100" description="vendus dans notre magasin" />
                <KeyNumber symbol="+" number="10" description="de clients satisfaits" />
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <Image src="/images/livre_lunette.png" alt="About Us" width={500} height={500} className="border-2 border-primary h-full object-cover rounded-md" />
          </div>
        </div>
      </section>

      <section className=" bg-background-secondary">
        <div className="container-custom flex flex-col gap-[40px]">
          <div className="text-center">
            <span className="text-primary font-bold">Témoignages</span>
            <div className="space-y-[16px]">
              <h2 className="text-3xl leading-none">
                Il parles de l'<span className="text-primary">Optic du Brulhois</span>
              </h2>
              <p className="text-lg">
                Des commentaires positifs de nos clients
              </p>
            </div>
          </div>
          <TestimonyCarousel testimonies={siteData.testimonies} />
        </div>
      </section>

      <CTA buttonLink="#contact" />

      <Coordonnees />

      <ContactForm />
    </>
  );
}

