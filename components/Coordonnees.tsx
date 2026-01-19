import siteData from "@/data/site-data.json";

export default function Coordonnees() {
  return (
    <section className="">
      <div className="container-custom flex flex-col gap-[40px]">
        <div className="text-left">
          <span className="text-primary font-bold">Nos Coordonnées</span>
          <div className="space-y-[16px]">
            <h2 className="text-3xl leading-none">
              Où
              <span className="text-primary"> nous retrouver </span>
              ?
            </h2>
            <p className="text-lg">
              Vous pouvez nous contacter par téléphone, email ou venir nous voir.              </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[40px]">
          <div className="w-full md:w-1/2 space-y-6">

            <div className="flex items-start gap-2">
              <div className="w-[32px] h-[32px]">
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="100%" fill="#556A3B"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 6h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zm15.16 1.8c-.09-.46-.5-.8-.98-.8H4.82c-.48 0-.89.34-.98.8l-1 5c-.12.62.35 1.2.98 1.2H4v5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1s1-.45 1-1v-5h.18c.63 0 1.1-.58.98-1.2l-1-5zM12 18H6v-4h6v4z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">Adresse</h3>
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
            </div>

            <div className="flex items-start gap-2">
              <div className="w-[32px] h-[32px]">
                <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="100%" fill="#556A3B"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" /></svg>              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">Téléphone</h3>
                <p>
                  {siteData.shop.phone}
                </p>
              </div>
            </div>


            <div className="flex items-start gap-2">
              <div className="w-[32px] h-[32px]">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="100%" viewBox="0 0 24 24" width="100%" fill="#556A3B"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M16,16 c-0.39,0.39-1.02,0.39-1.41,0l-3.29-3.29C11.11,12.52,11,12.27,11,12V8c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v3.59l3,3 C16.39,14.98,16.39,15.61,16,16z"/></g></svg>
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold text-primary">Horaires d'ouverture</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex justify-between items-start">
                      <span className="text-lg font-semibold">Lundi :</span>
                      <div className="text-right">
                        {siteData.shop.hours.monday.afternoon ? (
                          <div>{siteData.shop.hours.monday.afternoon}</div>
                        ) : null}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-start">
                      <span className="text-lg font-semibold">Mardi au Vendredi:</span>
                      <div className="text-right">
                        {siteData.shop.hours.tuesday.morning ? (
                          <div>{siteData.shop.hours.tuesday.morning}</div>
                        ) : null}
                        {siteData.shop.hours.tuesday.afternoon ? (
                          <div>{siteData.shop.hours.tuesday.afternoon}</div>
                        ) : null}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-start">
                      <span className="text-lg font-semibold">Samedi :</span>
                      <div className="text-right">
                        {siteData.shop.hours.saturday.morning ? (
                          <div>{siteData.shop.hours.saturday.morning}</div>
                        ) : null}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
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

