import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";
import { formatPhone } from "@/lib/format-phone";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 pb-16 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-2 lg:pt-24">
        <div>
          <Reveal>
            <Badge variant="accent">Montego Bay &amp; all of Jamaica</Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              {brand.name}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-lg text-pretty text-lg text-muted-foreground">
              Providing safe fun tours in all of Jamaica. Taking you to hidden local gems,
              sites, beaches, and rest.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact-us">
                  Book Now <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${brand.contact.phone}`}>
                  <Phone className="size-4" /> {formatPhone(brand.contact.phone)}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative grid grid-cols-[1.3fr_1fr] gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/15">
              <Image
                src="/ingested/insidetoursja/img-057.webp"
                alt="A guest zip-lining through the Jamaican rainforest canopy"
                fill
                priority
                sizes="(max-width: 1024px) 60vw, 32vw"
                quality={78}
                className="object-cover"
              />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
              <Image
                src="/ingested/insidetoursja/img-049.webp"
                alt="A couple relaxing on a bamboo raft during a Jamaica river tour"
                fill
                sizes="(max-width: 1024px) 40vw, 22vw"
                quality={75}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 size-24 overflow-hidden rounded-2xl border-4 border-background shadow-lg shadow-black/20 sm:size-28">
              <Image
                src="/ingested/insidetoursja/img-028.webp"
                alt="A group of guests posing together on an Inside Tours Jamaica excursion"
                fill
                sizes="112px"
                quality={70}
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
