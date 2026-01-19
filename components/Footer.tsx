import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-primary">
      <div className="py-3 container-custom flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <div className="flex gap-3">
          <div className="h-full">
            <Link href="/">
              <Image src="/images/logo_terracota_color.svg" alt="About Us" width={50} height={50} className="h-full" />
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Optic du Brulhois</span>
            <span className="">Tout droits réservés</span>
            <span className="">© 2025 - {currentYear}</span>
          </div>
        </div>
        <nav className="flex flex-col items-center gap-2">
          <Link className="hover:underline hover:opacity-90 transition-opacity duration-200" href="/mentions-legales">Mentions légales</Link>
          <Link className="hover:underline hover:opacity-90 transition-opacity duration-200" href="/politique-confidentialite">Politique de confidentialité</Link>
        </nav>
        <div className="">
          <span className="font-semibold">Suivez-nous sur les réseaux sociaux:</span>
          <div className="flex justify-center gap-2 mt-2">
            <Link
              href="https://www.facebook.com/people/Optic-du-Brulhois/61578005403119/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
            >
              <Image src="/icons/fb_icon.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link
              href="https://www.instagram.com/optic_du_brulhois/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
            >
              <Image src="/icons/insta_icon.svg" alt="Instagram" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

