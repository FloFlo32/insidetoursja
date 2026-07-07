import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Heart, Compass, Plane, Sparkles } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: `Who ${brand.name} is: a family-run tour company providing safe, fun tours all over Jamaica.`,
};

const whoWeAre = [
  {
    icon: Heart,
    text: "With Inside Tours Jamaica, you are family not a guest. We make sure you feel the warmth the fun, the laughter, service at your finger tips, its more fun with us.",
  },
  {
    icon: Compass,
    text: "Providing safe fun tours in all of Jamaica. Taking you to hidden local gems, sites, beaches, and restaurants. The real Jamaican experience. Let's tour!",
  },
  {
    icon: Sparkles,
    text: "When you say Inside Tours Jamaica you can always think of local, beauty, fun, you can always count on us for an ice-cold one.",
  },
  {
    icon: Camera,
    text: "We are happy to announce we now offer photography packages so you can enjoy your day hassle free while we capture all your best moments on camera with our amazing lens.",
  },
];

const whatWeDo = [
  {
    icon: Compass,
    title: "Tours",
    description: "Taking you to hidden local gems, sites, beaches and restaurants. The real Jamaican experience. Let's tour!",
    href: "/tours-excursions",
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
    description: "Book your airport transportation with us and experience the greatest (discount) ever inside tours Jamaica.",
    href: "/airport-transfers",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="About Us"
          title="Who We Are"
          description="With Inside Tours Jamaica, you are family not a guest. We make sure you feel the warmth the fun, the laughter, service at your finger tips."
          image="/ingested/insidetoursja/img-066.webp"
          imageAlt="An Inside Tours Jamaica guide with a smiling group of guests on a countryside tour"
        />

        <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {whoWeAre.map((item) => (
              <RevealItem
                key={item.text}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <item.icon className="size-5" />
                </span>
                <p className="text-pretty text-sm text-muted-foreground">{item.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="border-t border-border/70 bg-secondary/30 py-20 sm:py-28">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/10">
                  <Image
                    src="/ingested/insidetoursja/img-041.webp"
                    alt="Inside Tours Jamaica team on the road with a private transfer vehicle"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={75}
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  What We Do
                </span>
                <h2 className="mt-3 max-w-md text-balance text-3xl font-bold sm:text-4xl">
                  Tours, excursions, and transfers, all in one place
                </h2>
                <div className="mt-6 flex flex-col gap-4">
                  {whatWeDo.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="size-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{item.title}</span>
                        <span className="mt-0.5 block text-sm text-muted-foreground">
                          {item.description}
                        </span>
                      </span>
                      <ArrowRight className="ml-auto mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
                <Button asChild size="lg" className="mt-7">
                  <Link href="/contact-us">
                    Get in touch <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
