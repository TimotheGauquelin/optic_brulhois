import type { Metadata } from "next";
import Link from "next/link";
import siteData from "@/data/site-data.json";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de L'Optic du Brulhois - Opticienne à Layrac. Informations sur la collecte et l'utilisation de vos données personnelles.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-white">
      <div id="jumbotron" className="jumbotron-custom mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-primary">
          Politique de confidentialité
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <p className="text-lg text-gray-600 mb-6">
              La présente politique de confidentialité décrit la manière dont L&apos;Optic du Brulhois collecte,
              utilise et protège les informations que vous nous fournissez lorsque vous utilisez notre site web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est :
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
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Données collectées</h2>
            <p>
              L&apos;Optic du Brulhois collecte des données personnelles uniquement via son formulaire de contact. Nous avons besoin de :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li><strong>Données d&apos;identification :</strong>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Nom</li>
                  <li>Prénom</li>
                  <li>Adresse email</li>
                </ul>
              </li>
            </ul>
            <p className="mt-4">
              Ces données sont strictement nécessaires pour répondre aux demandes envoyées par les utilisateurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Finalités du traitement</h2>
            <p>
              Vos données personnelles sont utilisées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Répondre aux messages envoyés via le formulaire de contact</li>
              <li>Echanger par e-mail avec l&apos;utilisateur</li>
            </ul>
            <p className="mt-4 font-bold">
              Elles ne sont en aucun cas utilisées à des fins commerciales ou publicitaires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Base légale du traitement</h2>
            <p>
              Le traitement des données repose sur le consentement de l’utilisateur, donné lors de l’envoi du formulaire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Conservation des données</h2>
            <p>
              Les données sont conservées uniquement le temps nécessaire au traitement de la demande et au maximum 12 mois sauf obligation légale contraire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Partage des données</h2>
            <p>
              Vos données personnelles <span className="font-bold">ne sont pas vendues, louées ou partagées avec des tiers à des fins commerciales.</span>
            </p>
            <p className="mt-4">
              Nous pouvons partager vos données avec :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li><strong>Nos prestataires techniques :</strong> hébergeur, services d&apos;email (dans le cadre de l&apos;exécution de leurs services)</li>
              <li><strong>Les autorités compétentes :</strong> en cas d&apos;obligation légale ou de réquisition judiciaire</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Cookies</h2>
            <p>
              Ce site ne fait pas usage de cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Droits de l&apos;utilisateur</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles,
              vous pouvez nous contacter :
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

      </div>
    </div>
  );
}

