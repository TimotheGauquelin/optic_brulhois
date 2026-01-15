import type { Metadata } from "next";
import Link from "next/link";
import siteData from "@/data/site-data.json";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de L'Optic du Brulhois - Opticienne à Layrac. Informations sur l'entreprise, l'hébergeur et les données personnelles.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="section-padding bg-white min-h-screen">
      <div className="container-custom max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          Mentions légales
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Éditeur du site</h2>
            <p>
              Le site <strong>optic-brulhois.fr</strong> est édité par :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="mb-2"><strong>{siteData.shop.name}</strong></p>
              <p className="mb-2">{siteData.shop.address.fullAddress}</p>
              <p className="mb-2">
                Téléphone : <a href={`tel:${siteData.shop.phone}`} className="text-primary hover:underline">{siteData.shop.phone}</a>
              </p>
              <p>
                Email : <a href={`mailto:${siteData.shop.email}`} className="text-primary hover:underline">{siteData.shop.email}</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Directeur de publication</h2>
            <p>
              Le directeur de publication est le propriétaire de L'Optic du Brulhois.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Hébergement</h2>
            <p>
              Ce site est hébergé par :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p><strong>Vercel Inc.</strong></p>
              <p>340 S Lemon Ave #4133</p>
              <p>Walnut, CA 91789</p>
              <p>United States</p>
              <p>
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a>
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              <em>Note : À remplacer par les informations de votre hébergeur réel lors du déploiement.</em>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="mt-4">
              La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse de l'éditeur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Protection des données personnelles</h2>
            <p>
              Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p className="mt-4">
              Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante :{" "}
              <a href={`mailto:${siteData.shop.email}`} className="text-primary hover:underline">{siteData.shop.email}</a>
            </p>
            <p className="mt-4">
              Pour plus d'informations, consultez notre{" "}
              <Link href="/politique-confidentialite" className="text-primary hover:underline">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur ce site, 
              vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Liens externes</h2>
            <p>
              Le site peut contenir des liens vers d'autres sites. L'Optic du Brulhois n'exerce aucun contrôle sur ces sites 
              et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Limitation de responsabilité</h2>
            <p>
              L'Optic du Brulhois s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, 
              dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
            </p>
            <p className="mt-4">
              Toutefois, L'Optic du Brulhois ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
              mises à disposition sur ce site. En conséquence, l'entreprise décline toute responsabilité pour tout dommage 
              résultant d'une imprécision ou d'une omission des informations disponibles sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, 
              le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="mb-2">
                <strong>Email :</strong>{" "}
                <a href={`mailto:${siteData.shop.email}`} className="text-primary hover:underline">{siteData.shop.email}</a>
              </p>
              <p className="mb-2">
                <strong>Téléphone :</strong>{" "}
                <a href={`tel:${siteData.shop.phone}`} className="text-primary hover:underline">{siteData.shop.phone}</a>
              </p>
              <p>
                <strong>Adresse :</strong> {siteData.shop.address.fullAddress}
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

