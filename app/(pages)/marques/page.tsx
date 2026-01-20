import type { Metadata } from "next";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Coordonnees from "@/components/Coordonnees";
import siteData from "@/data/site-data.json";

export const metadata: Metadata = {
  title: "Marques françaises de lunettes et lentilles",
  description: "Découvrez toutes les marques françaises de lunettes et lentilles disponibles chez L'Optic du Brulhois à Layrac : Lafont, Face à Face, Essilor, Varilux, et bien d'autres.",
  openGraph: {
    title: "Marques françaises - L'Optic du Brulhois",
    description: "Découvrez toutes les marques françaises de lunettes et lentilles disponibles chez L'Optic du Brulhois.",
  },
};

export default function MarquesPage() {
  const brandsByCategory = siteData.brands.reduce((acc, brand) => {
    if (!acc[brand.category]) {
      acc[brand.category] = [];
    }
    acc[brand.category].push(brand);
    return acc;
  }, {} as Record<string, typeof siteData.brands>);

  return (
    <>
      <div id="jumbotron" className="jumbotron-custom mx-auto">
        <h1 className="text-3xl font-bold">
          Nos <span className="text-primary">marques</span>
        </h1>
        <div className="space-y-4">
          <p className="text-lg">
            Nous privilégions la qualité en vous proposant des lunettes produites en France. Chaque monture est issue d’un savoir-faire reconnu, alliant design, confort et durabilité. Travailler avec des fabricants français nous permet de garantir des standards élevés de fabrication. Nous sélectionnons nos collections avec soin afin de répondre à toutes les envies et à tous les styles.
          </p>
          <p className="text-lg">
            Découvrez ci-dessous les marques françaises qui nous font confiance et avec lesquelles nous collaborons.
          </p>
        </div>
      </div>

      {/* Brands by Category */}
      <section className=" bg-background-primary">
        <div className="container-custom flex flex-col space-y-16">
          {Object.entries(brandsByCategory).map(([category, brands]) => (
            <div key={category}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brands.map((brand) => (
                  <div
                    key={brand.id}
                    className="bg-background-secondary p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-primary"
                  >
                    <h3 className="text-xl font-bold mb-3">
                      {brand.name}
                    </h3>
                    <p className="leading-relaxed opacity-90">
                      {brand.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why French Brands */}
      <section className=" bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi choisir des marques françaises ?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Les marques françaises de lunettes et lentilles sont reconnues mondialement pour leur qualité,
              leur innovation et leur savoir-faire artisanal. En choisissant des marques françaises, vous
              bénéficiez de produits de haute qualité tout en soutenant l&apos;économie locale.
            </p>
            <p className="text-lg opacity-90">
              Chez L&apos;Optic du Brulhois, nous sommes fiers de proposer un large choix de marques françaises,
              des plus prestigieuses aux plus accessibles, pour répondre à tous vos besoins et tous vos budgets.
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

