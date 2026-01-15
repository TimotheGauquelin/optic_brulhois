import siteData from "@/data/site-data.json";

export default function Coordonnees() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="">
          <span className="text-primary font-bold">Nos coordonnées</span>
          <h2 className="text-3xl">
            Où nous
            <span className="text-primary">retrouver</span>
            ?
          </h2>
          <span className="text-lg">
            Vous pouvez nous contacter par téléphone, email ou venir nous voir.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Adresse</h3>
              <p>
                {siteData.shop.address.fullAddress}
              </p>
              <a
                href={siteData.shop.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline mt-2 inline-block"
              >
                Voir sur Google Maps →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Téléphone</h3>
              <a
                href={`tel:${siteData.shop.phone}`}
                className="hover:text-primary transition-colors"
              >
                {siteData.shop.phone}
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Horaires d'ouverture</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Lundi :</span>
                  <span>{siteData.shop.hours.monday}</span>
                </li>
                <li className="flex justify-between">
                  <span>Mardi au Vendredi:</span>
                  <span>{siteData.shop.hours.tuesday}</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi :</span>
                  <span>{siteData.shop.hours.saturday}</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border-4 border-primary">
              <iframe
                src={siteData.shop.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation L'Optic du Brulhois"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

