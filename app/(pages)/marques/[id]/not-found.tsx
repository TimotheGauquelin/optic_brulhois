import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-primary">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Marque non trouvée</h1>
        <p className="text-lg mb-8 opacity-80">
          La marque que vous recherchez n&apos;existe pas.
        </p>
        <Link
          href="/marques"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Retour aux marques
        </Link>
      </div>
    </div>
  );
}

