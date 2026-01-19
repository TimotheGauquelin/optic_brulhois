"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import siteData from "@/data/site-data.json";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuDesktopHeight, setMenuDesktopHeight] = useState(0);
  const menuDesktopRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateMenuHeight = () => {
      if (menuDesktopRef.current) {
        setMenuDesktopHeight(menuDesktopRef.current.offsetHeight);
      }
    };

    updateMenuHeight();
    window.addEventListener("resize", updateMenuHeight);
    return () => window.removeEventListener("resize", updateMenuHeight);
  }, []);

  return (
    <header id="header" className={`bg-white md:bg-background-secondary sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b-2 border-primary" : ""}`}>
      <nav id="lala" ref={menuDesktopRef} className="relative py-3 container-custom">
        <div id="menu-desktop" className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo_terracota_color.svg"
              alt={siteData.shop.name}
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`hover:text-primary transition-colors ${isActive("/") ? "text-primary font-semibold" : ""}`}>
              Accueil
            </Link>
            <Link href="/services" className={`hover:text-primary transition-colors ${isActive("/services") ? "text-primary font-semibold" : ""}`}>
              Nos Services
            </Link>
            <Link href="/marques" className={`hover:text-primary transition-colors ${isActive("/marques") ? "text-primary font-semibold" : ""}`}>
              Nos Marques
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div 
            id="menu-mobile" 
            className={`absolute left-0 right-0 bg-background-secondary md:hidden border-b-2 border-primary rounded-b-lg`}
            style={{ top: `${menuDesktopHeight}px` }}
          >
            <Link href="/" className={`p-3 block hover:text-primary transition-colors ${isActive("/") ? "text-primary" : ""}`}>
              Accueil
            </Link>
            <Link href="/services" className={`p-3 block hover:text-primary transition-colors ${isActive("/services") ? "text-primary" : ""}`}>
              Services
            </Link>
            <Link href="/marques" className={`p-3 block hover:text-primary transition-colors ${isActive("/marques") ? "text-primary" : ""}`}>
              Marques
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

