import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Plane, Sparkles, CalendarRange } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { ImageCard } from "@/components/magic/image-card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description: `What ${brand.name} does: tours, excursions, airport transfers, and customized trips across Jamaica.`,
};

const services = [
  {
    icon: Compass,
    title: "Tours",
    description:
      "Taking you to hidden local gems, sites, beaches and restaurants. The real Jamaican experience. Let's tour!",
    href: "/tours-excursions",
    highlight: true,
  },
  {
    icon: Sparkles,
    title: "Excursions",
    description: "Let's take on this amazing journey for a one of a kind experience.",
    href: "/tours-excursions",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Book your airport transportation with us and experience the greatest (discount) ever inside tours Jamaica.",
    href: "/airport-transfers",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Services"
          title="Our Services"
          description="With Inside Tours Jamaica, you are family not a guest. We make sure you feel the warmth, the fun, the laughter, service at your finger tips, its more fun with us."
          image="/ingested/insidetoursja/img-031.webp"
          imageAlt="Guests enjoying a day out with Inside Tours Jamaica"
        />

        <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What We Do
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
              Three ways to explore Jamaica with us
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3">
            {services.map((s) => (
              <RevealItem key={s.title}>
                <Link
                  href={s.href}
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
                    s.highlight
                      ? "border-primary/30 bg-primary/5 hover:shadow-primary/15"
                      : "border-border bg-card hover:shadow-primary/10"
                  )}
                >
                  {s.highlight && (
                    <Badge variant="accent" className="mb-4 w-fit">
                      Most popular
                    </Badge>
                  )}
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-xl",
                      s.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    )}
                  >
                    <s.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-pretty text-sm text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="border-t border-border/70 bg-secondary/30 py-20 sm:py-28">
          <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Customized Trip
              </span>
              <h2 className="mt-3 max-w-md text-balance text-3xl font-bold sm:text-4xl">
                2 or 3 tours, one exciting day
              </h2>
              <p className="mt-4 max-w-md text-pretty text-muted-foreground">
                We at Inside Tours Jamaica create the best tour packages allowing you and
                yours to enjoy 2 or 3 tours in one exciting day.
              </p>
              <Button asChild size="lg" className="mt-7">
                <Link href="/contact-us" data-yetti-activity="">
                  Book Now <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.08}>
              <ImageCard
                src="/ingested/insidetoursja/img-035.webp"
                alt="Guests on a customized multi-tour day trip with Inside Tours Jamaica"
                title="Support 24/7"
                description="Private message us on Facebook or Instagram, call, or email to learn more about our transfer and excursion packages."
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
