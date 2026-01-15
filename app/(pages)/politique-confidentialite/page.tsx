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
    <div className="section-padding bg-white min-h-screen">
      <div className="container-custom max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          Politique de confidentialité
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <p className="text-lg text-gray-600 mb-6">
              La présente politique de confidentialité décrit la manière dont L'Optic du Brulhois collecte, 
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
              Nous collectons les données personnelles suivantes lorsque vous utilisez notre site web :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
              <li><strong>Données de contact :</strong> messages envoyés via le formulaire de contact</li>
            </ul>
            <p className="mt-4">
              Ces données sont collectées lorsque vous :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Remplissez le formulaire de contact</li>
              <li>Naviguez sur notre site web</li>
              <li>Prenez contact avec nous par email ou téléphone</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Finalités du traitement</h2>
            <p>
              Vos données personnelles sont utilisées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Répondre à vos demandes de contact et de rendez-vous</li>
              <li>Améliorer notre site web et votre expérience utilisateur</li>
              <li>Vous informer de nos services et actualités (avec votre consentement)</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Base légale du traitement</h2>
            <p>
              Le traitement de vos données personnelles est basé sur :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li><strong>Votre consentement :</strong> pour l'envoi de communications marketing</li>
              <li><strong>L'exécution d'un contrat :</strong> pour la prise de rendez-vous et la fourniture de nos services</li>
              <li><strong>Notre intérêt légitime :</strong> pour l'amélioration de notre site web et de nos services</li>
              <li><strong>Le respect d'obligations légales :</strong> pour la conservation de certaines données</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Conservation des données</h2>
            <p>
              Vos données personnelles sont conservées pour les durées suivantes :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
              <li><strong>Données clients :</strong> durée de la relation commerciale + 10 ans (obligations comptables)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Partage des données</h2>
            <p>
              Vos données personnelles ne sont pas vendues, louées ou partagées avec des tiers à des fins commerciales.
            </p>
            <p className="mt-4">
              Nous pouvons partager vos données avec :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li><strong>Nos prestataires techniques :</strong> hébergeur, services d'email (dans le cadre de l'exécution de leurs services)</li>
              <li><strong>Les autorités compétentes :</strong> en cas d'obligation légale ou de réquisition judiciaire</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li><strong>Droit d'accès :</strong> vous pouvez obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> vous pouvez corriger vos données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> vous pouvez demander la limitation du traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> vous pouvez récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment, sans affecter la licéité du traitement basé sur le consentement effectué avant le retrait</li>
            </ul>
            <p className="mt-6">
              Pour exercer ces droits, vous pouvez nous contacter :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="mb-2">
                <strong>Email :</strong>{" "}
                <a href={`mailto:${siteData.shop.email}`} className="text-primary hover:underline">{siteData.shop.email}</a>
              </p>
              <p>
                <strong>Adresse :</strong> {siteData.shop.address.fullAddress}
              </p>
            </div>
            <p className="mt-4">
              Vous avez également le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) 
              si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD.
            </p>
            <p className="mt-2">
              Site web de la CNIL :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.cnil.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte 
              stockés sur votre appareil lorsque vous visitez un site web.
            </p>
            <p className="mt-4">
              Types de cookies utilisés :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (ne peuvent pas être désactivés)</li>
              <li><strong>Cookies analytiques :</strong> pour comprendre comment les visiteurs utilisent le site (avec votre consentement)</li>
            </ul>
            <p className="mt-4">
              Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles 
              contre tout accès non autorisé, perte, destruction ou altération.
            </p>
            <p className="mt-4">
              Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée. 
              Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos données, 
              nous ne pouvons garantir leur sécurité absolue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Modifications de la politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une mise à jour de la date de dernière modification.
            </p>
            <p className="mt-4">
              Nous vous encourageons à consulter régulièrement cette page pour rester informé de la manière 
              dont nous protégeons vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Contact</h2>
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

        <div className="mt-12 text-center">
          <Link href="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

