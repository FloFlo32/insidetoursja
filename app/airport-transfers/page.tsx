import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wine, Sandwich, ShieldCheck } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { ImageCard } from "@/components/magic/image-card";

export const metadata: Metadata = {
  title: "Airport Transfers",
  description: `Book your airport transportation with ${brand.name}: private, air-conditioned transfers from Montego Bay and Kingston.`,
};

const transfers = [
  {
    title: "Montego Bay Airport Transfers",
    href: "/montego-bay-airport-transfers",
    image: "/ingested/insidetoursja/img-039.webp",
    alt: "Private airport transfer vehicle for Montego Bay, Jamaica",
    description:
      "Sangster International Airport Montego Bay is a leading tourism gateway to the island of Jamaica.",
  },
  {
    title: "Kingston Airport Transfers",
    href: "/kingston-airport-transfers",
    image: "/ingested/insidetoursja/img-041.webp",
    alt: "Private airport transfer vehicle for Kingston, Jamaica",
    description:
      "Norman Manley International Airport sits on a beautiful peninsula near the historic site of Port Royal.",
  },
];

export default function AirportTransfersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Airport Transfers"
          title="Airport Transfers"
          description="Book your airport transportation with us and experience the greatest (discount) ever inside tours Jamaica."
          image="/ingested/insidetoursja/img-036.webp"
          imageAlt="Private airport transfer vehicle waiting for guests in Jamaica"
        />

        <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Here&apos;s the list...
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
              Choose your airport
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            <Badge variant="outline">
              <Wine className="size-3.5" /> Complimentary drink
            </Badge>
            <Badge variant="outline">
              <Sandwich className="size-3.5" /> Local dishes on board
            </Badge>
            <Badge variant="outline">
              <ShieldCheck className="size-3.5" /> All fees &amp; taxes included
            </Badge>
          </div>

          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {transfers.map((t) => (
              <RevealItem key={t.href}>
                <ImageCard
                  src={t.image}
                  alt={t.alt}
                  title={t.title}
                  description={t.description}
                  href={t.href}
                  ratio="aspect-[16/10]"
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="border-t border-border/70 bg-secondary/30 py-20 sm:py-28">
          <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Tours &amp; Excursions
              </span>
              <h2 className="mt-3 max-w-md text-balance text-3xl font-bold sm:text-4xl">
                Combine your transfer with a tour
              </h2>
              <p className="mt-4 max-w-md text-pretty text-muted-foreground">
                We at Inside Tours Jamaica create the best tour packages allowing you and
                yours to enjoy 2 or 3 tours in one exciting day.
              </p>
              <Button asChild size="lg" className="mt-7">
                <Link href="/tours-excursions">
                  View our tours <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.08}>
              <ImageCard
                src="/ingested/insidetoursja/img-028.webp"
                alt="A group of guests posing together after an Inside Tours Jamaica excursion"
                title="Book Now"
                description="Private message us using any of these links here to learn more about our transfers and excursions packages."
                href="/contact-us"
                activityId=""
                ratio="aspect-[4/3]"
              />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
