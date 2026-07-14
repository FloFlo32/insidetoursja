import Link from "next/link";
import { ArrowRight, Wine, Sandwich } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { ImageCard } from "@/components/magic/image-card";
import { Badge } from "@/components/ui/badge";

const transfers = [
  {
    title: "Montego Bay Airport Transfers",
    href: "/montego-bay-airport-transfers",
    image: "/ingested/insidetoursja/img-airport-transfer-pickup.webp",
    imagePosition: "top" as const,
    alt: "Private airport transfer vehicle for Montego Bay, Jamaica",
    description:
      "Sangster International Airport is a leading tourism gateway to Jamaica. Our drivers wait outside the terminal exit with our company sign in hand.",
  },
  {
    title: "Kingston Airport Transfers",
    href: "/kingston-airport-transfers",
    image: "/ingested/insidetoursja/img-041.webp",
    alt: "Private airport transfer vehicle for Kingston, Jamaica",
    description:
      "Norman Manley International Airport sits within 30 minutes of New Kingston. Punctual, air-conditioned, private transportation awaits.",
  },
];

export function TransfersPreview() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Airport Transfers Packages
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-3 max-w-xl text-balance text-4xl font-bold sm:text-5xl">
              Beer and Jamaican patties on the way
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
              Book a private airport transfer with us and we can assure you there is beer
              and Jamaican patties. We take you to and from the airport, the beach, or the
              river, and make sure you have a yummy tummy with our local dishes.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Badge variant="outline">
          <Wine className="size-3.5" /> Complimentary drink
        </Badge>
        <Badge variant="outline">
          <Sandwich className="size-3.5" /> Local dishes on board
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
              imagePosition={t.imagePosition}
            />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-8">
        <Link
          href="/airport-transfers"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          See all airport transfer options <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </section>
  );
}
