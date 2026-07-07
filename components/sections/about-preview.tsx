import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/10">
            <Image
              src="/ingested/insidetoursja/img-066.webp"
              alt="An Inside Tours Jamaica guide with a smiling group of guests on a countryside tour"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
            <Heart className="size-5" />
          </span>
          <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About Us
          </span>
          <h2 className="mt-3 max-w-md text-balance text-3xl font-bold sm:text-4xl">
            Providing safe, fun tours all over Jamaica
          </h2>
          <p className="mt-4 max-w-md text-pretty text-muted-foreground">
            Taking you to hidden local gems, sites, beaches, and restaurants. The real
            Jamaican experience. With Inside Tours Jamaica, you are family, not a guest.
            Let&apos;s tour!
          </p>
          <Button asChild size="lg" variant="outline" className="mt-7">
            <Link href="/about-us">
              Learn more about us <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
