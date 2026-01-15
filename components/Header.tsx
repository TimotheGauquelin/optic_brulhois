"use client";

import Link from "next/link";
import { useState } from "react";
import siteData from "@/data/site-data.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="py-3 container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo_terracota_color.svg"
              alt={siteData.shop.name}
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="hover:text-primary transition-colors">
              Nos Services
            </Link>
            <Link href="/marques" className="hover:text-primary transition-colors">
              Nos Marques
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/" className="block hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="block hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/marques" className="block hover:text-primary transition-colors">
              Marques
            </Link>
            <a href="#contact" className="btn-primary inline-block">
              Prendre RDV
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

