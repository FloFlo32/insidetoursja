import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { TourCard } from "@/components/sections/tour-card";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { tours } from "@/lib/tours";
import { formatPhone } from "@/lib/format-phone";

export const metadata: Metadata = {
  title: "Tours & Excursions",
  description: `All 22 tours and excursions from ${brand.name}: waterfalls, rivers, cultural tours, and adventure activities across Jamaica.`,
};

export default function ToursExcursionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Tours & Excursions"
          title="Tours & Excursions"
          description="Taking you to hidden local gems, sites, beaches and restaurants. The real Jamaican experience. Let's tour!"
          image="/ingested/insidetoursja/img-042.webp"
          imageAlt="Inside Tours Jamaica tour and excursion experience"
        />

        <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Here&apos;s the list...
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
              22 tours, all one of a kind
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              No fixed prices are listed. Message us on Facebook or Instagram, call, or
              email, and we&apos;ll help you build the perfect day.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <RevealItem key={tour.name}>
                <TourCard tour={tour} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="border-t border-border/70 bg-secondary/30 py-20 sm:py-28">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <div className="rounded-3xl border border-primary/20 bg-card p-8 sm:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Airport Transfers
                </span>
                <h2 className="mt-3 max-w-xl text-balance text-3xl font-bold sm:text-4xl">
                  We at Inside Tours Jamaica create the best tour packages
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
                  Allowing you and yours to enjoy 2 or 3 tours in one exciting day, plus a
                  smooth private transfer to and from the airport.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/airport-transfers">
                      See airport transfers <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={`tel:${brand.contact.phone}`}>
                      <Phone className="size-4" /> {formatPhone(brand.contact.phone)}
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
