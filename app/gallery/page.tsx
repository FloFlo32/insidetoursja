import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { Gallery } from "@/components/magic/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Highlights from ${brand.name}: real guests, real tours, real Jamaica.`,
};

const images = [
  { src: "/stock/dunns-falls-crowd.webp", alt: "Guests swimming and taking photos at the base of Dunn's River Falls" },
  { src: "/stock/blue-hole-rope-swing.webp", alt: "A guest swinging on a rope into the Blue Hole's turquoise water" },
  { src: "/stock/river-tubing-guests.webp", alt: "Guests tubing down a calm, tree-lined Jamaican river" },
  { src: "/stock/dunns-falls-rasta-house.webp", alt: "Guests climbing Dunn's River Falls past the colorful riverside houses" },
  { src: "/ingested/insidetoursja/img-fishing-trip-02.webp", alt: "An Inside Tours Jamaica guide posing with a fishing trip catch at the Ocho Rios dock" },
  { src: "/ingested/insidetoursja/img-fishing-trip-01.webp", alt: "A pair of marlin caught on an Inside Tours Jamaica fishing trip, laid out on the dock" },
  ...[
    "img-068", "img-069", "img-070", "img-071", "img-072", "img-073",
    "img-054", "img-028", "img-074", "img-075", "img-076", "img-077",
    "img-078", "img-061", "img-079", "img-080", "img-081", "img-082",
    "img-083", "img-084", "img-085", "img-086", "img-087",
    "img-021", "img-022", "img-035", "img-036",
  ].map((id) => ({
    src: `/ingested/insidetoursja/${id}.webp`,
    alt: `${brand.name} guests enjoying a tour in Jamaica`,
  })),
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Gallery"
          title="Highlights"
          description="Real guests, real tours, real Jamaica. A look at the moments we get to share every day."
          image="/ingested/insidetoursja/img-068.webp"
          imageAlt="Guests enjoying an Inside Tours Jamaica excursion"
        />

        <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
          <Reveal>
            <Gallery images={images} />
          </Reveal>
        </section>

        <section className="border-t border-border/70 bg-secondary/30 py-20 sm:py-28">
          <div className="container-px mx-auto max-w-7xl text-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-bold sm:text-4xl">
                Want to be in the next one?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Contact Inside Tours Jamaica and let&apos;s plan your visit.
              </p>
              <Button asChild size="lg" className="mt-7">
                <Link href="/contact-us">
                  Contact Us <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
