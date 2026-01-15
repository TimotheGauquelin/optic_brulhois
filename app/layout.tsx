import type { Metadata } from "next";
import { Montserrat, Poly } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import siteData from "@/data/site-data.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poly = Poly({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poly",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optic-brulhois.fr"),
  title: {
    default: "L'Optic du Brulhois - Opticienne à Layrac | Lunettes & Lentilles",
    template: "%s | L'Optic du Brulhois",
  },
  description: "Opticienne professionnelle à Layrac. Examen de la vue, lunettes sur mesure, lentilles de contact. Large choix de marques françaises. Prise de rendez-vous en ligne.",
  keywords: ["opticien", "opticienne", "Layrac", "lunettes", "lentilles", "examen vue", "verres progressifs", "opticien Layrac", "lunettes sur mesure"],
  authors: [{ name: "L'Optic du Brulhois" }],
  creator: "L'Optic du Brulhois",
  publisher: "L'Optic du Brulhois",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://optic-brulhois.fr",
    siteName: "L'Optic du Brulhois",
    title: "L'Optic du Brulhois - Opticienne à Layrac",
    description: "Opticienne professionnelle à Layrac. Examen de la vue, lunettes sur mesure, lentilles de contact.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "L'Optic du Brulhois",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Optic du Brulhois - Opticienne à Layrac",
    description: "Opticienne professionnelle à Layrac. Examen de la vue, lunettes sur mesure, lentilles de contact.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://optic-brulhois.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const parseOpeningHours = () => {
    const hours = siteData.shop.hours;
    const specifications: any[] = [];

    const dayMapping: Record<string, string> = {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
    };

    const formatTime = (timeStr: string): string => {
      const cleaned = timeStr.trim();
      const [hours, minutes] = cleaned.replace("h", ":").split(":");
      return `${hours.padStart(2, "0")}:${minutes || "00"}`;
    };

    Object.entries(hours).forEach(([day, hoursStr]) => {
      if (hoursStr === "Fermé") return;

      const dayOfWeek = dayMapping[day];
      if (!dayOfWeek) return;

      const slots = hoursStr.split(",").map((s) => s.trim());

      slots.forEach((slot) => {
        const [opens, closes] = slot.split("-").map((s) => s.trim());
        if (opens && closes) {
          specifications.push({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: dayOfWeek,
            opens: formatTime(opens),
            closes: formatTime(closes),
          });
        }
      });
    });

    return specifications;
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Optician",
    "name": siteData.shop.name,
    "image": "https://optic-brulhois.fr/og-image.jpg",
    "@id": "https://optic-brulhois.fr",
    "url": "https://optic-brulhois.fr",
    "telephone": siteData.shop.phone,
    "email": siteData.shop.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteData.shop.address.street,
      "addressLocality": siteData.shop.address.city,
      "postalCode": siteData.shop.address.postalCode,
      "addressCountry": "FR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.123456,
      "longitude": 0.661234,
    },
    "openingHoursSpecification": parseOpeningHours(),
    "priceRange": "€€",
    "areaServed": {
      "@type": "City",
      "name": "Layrac",
    },
  };

  return (
    <html lang="fr" className={`${montserrat.variable} ${poly.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://optic-brulhois.fr" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
