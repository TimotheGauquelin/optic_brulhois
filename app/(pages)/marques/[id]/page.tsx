import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Coordonnees from "@/components/Coordonnees";
import siteData from "@/data/site-data.json";

interface BrandDetailPageProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    return siteData.brands.map((brand) => ({
        id: brand.id,
    }));
}

export async function generateMetadata({ params }: BrandDetailPageProps): Promise<Metadata> {
    const brand = siteData.brands.find((b) => b.id === params.id);

    if (!brand) {
        return {
            title: "Marque non trouvée",
        };
    }

    return {
        title: `${brand.name} - L'Optic du Brulhois`,
        description: brand.detailedDescription || brand.description,
        openGraph: {
            title: `${brand.name} - L'Optic du Brulhois`,
            description: brand.detailedDescription || brand.description,
            images: brand.images && brand.images.length > 0 ? [brand.images[0]] : brand.image ? [brand.image] : [],
        },
    };
}

export default function BrandDetailPage({ params }: BrandDetailPageProps) {
    const brand = siteData.brands.find((b) => b.id === params.id);

    if (!brand) {
        notFound();
    }

    const images = brand.images || (brand.image ? [brand.image] : []);

    return (
        <>
            <div id="jumbotron" className="jumbotron-custom mx-auto">
                <Link
                    href="/marques"
                    className="text-primary hover:text-primary/80 mb-4 inline-block transition-colors"
                >
                    ← Retour aux marques
                </Link>
                <h1 className="text-3xl font-bold">
                    {brand.name}
                </h1>
            </div>

            {images.length > 0 && (
                <section className="bg-background-primary">
                    <div className="container-custom">
                    <h2 className="text-2xl font-bold mb-6 text-primary">Galerie</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <Image
                                        src={image}
                                        alt={`${brand.name} - Image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="bg-background-secondary">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold mb-6 text-primary">À propos de {brand.name}</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg leading-relaxed mb-4">
                            {brand.detailedDescription || brand.description}
                        </p>
                        {brand.history && (
                            <div className="mt-8">
                                <h3 className="text-xl font-bold mb-4">Histoire</h3>
                                <p className="text-lg leading-relaxed">{brand.history}</p>
                            </div>
                        )}
                        {brand.features && brand.features.length > 0 && (
                            <div className="mt-8">
                                <h3 className="text-xl font-bold mb-4">Caractéristiques</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {brand.features.map((feature, index) => (
                                        <li key={index} className="text-lg">{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <CTA />

            <Coordonnees />

            <ContactForm />
        </>
    );
}

