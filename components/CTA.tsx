import Link from "next/link";
import Image from "next/image";

interface CTAProps {
  buttonLink?: string;
}

export default function CTA({
  buttonLink = "#contact",
}: CTAProps) {
  return (
    <section className="hidden md:block bg-white">
      <div className="cta-custom text-center">
        <a href={buttonLink} className="btn-secondary hover:opacity-90 transition-opacity duration-200">
          <Image src="/images/call_to_action.svg" alt="About Us" width={50} height={50} className="h-full w-full" />
        </a>
      </div>
    </section>
  );
}

