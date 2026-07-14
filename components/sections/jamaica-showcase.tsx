import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";

const shots = [
  {
    src: "/stock/dunns-falls-crowd.webp",
    alt: "Guests swimming and taking photos at the base of Hidden Falls",
    label: "Hidden Falls",
    wrapClassName: "sm:row-span-2",
    imgClassName: "aspect-[4/5] sm:aspect-auto sm:h-full",
  },
  {
    src: "/ingested/insidetoursja/img-blue-hole-01.webp",
    alt: "A guest swinging on a rope into the Blue Hole's turquoise water",
    label: "Blue Hole Falls",
    imgClassName: "aspect-[4/3]",
  },
  {
    src: "/stock/river-tubing-guests.webp",
    alt: "Guests tubing down a calm, tree-lined Jamaican river",
    label: "River Tubing",
    imgClassName: "aspect-[4/3]",
  },
  {
    src: "/stock/dunns-falls-rasta-house.webp",
    alt: "Guests climbing Dunn's River Falls past the colorful riverside houses",
    label: "Falls & Village Life",
    wrapClassName: "sm:col-span-2",
    imgClassName: "aspect-[16/9]",
  },
];

export function JamaicaShowcase() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Jamaica, The Way It Should Be
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-3 max-w-xl text-balance text-4xl font-bold sm:text-5xl">
              Hidden gems, warm water, good company
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <Button asChild size="lg" variant="outline" className="shrink-0">
            <Link href="/tours-excursions">
              Plan your day <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {shots.map((s) => (
          <RevealItem
            key={s.src}
            className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${s.wrapClassName ?? ""}`}
          >
            <div className={`flex-1 overflow-hidden bg-muted ${s.imgClassName}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>
            <p className="p-4 text-sm font-semibold">{s.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
