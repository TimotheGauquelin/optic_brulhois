import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="py-3 container-custom flex justify-between items-center">
        <div className="flex gap-3">
          <div className="h-full">
            <Link href="/">
              <Image src="/images/logo_terracota_color.svg" alt="About Us" width={50} height={50} className="h-full" />
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="">Optic du Brulhois</span>
            <span className="">Tout droits réservés</span>
            <span className="">© 2025 - {currentYear}</span>
          </div>
        </div>
        <nav className="">
          <ul className="flex gap-2">
            <li>
              <Link href="/">Mentions légales</Link>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <Link href="/services">Politique de confidentialité</Link>
            </li>
          </ul>
        </nav>
        <div className="">
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
      </div>
    </footer>
  );
}

