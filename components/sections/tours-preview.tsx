import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { AutoSlider } from "@/components/magic/auto-slider";
import { TourCard } from "@/components/sections/tour-card";
import { tours } from "@/lib/tours";

export function ToursPreview() {
  const preview = tours.slice(0, 8);

  return (
    <section id="tours" className="border-y border-border/70 bg-secondary/30 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Our Tour Packages
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-3 max-w-xl text-balance text-4xl font-bold sm:text-5xl">
                What are you waiting on?
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
                Get booked for one of our most popular, unforgettable experiences. Sit back,
                relax, and leave it up to us.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Button asChild size="lg" variant="outline" className="shrink-0">
              <Link href="/tours-excursions">
                View all 22 tours <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <AutoSlider itemClassName="w-[85%] sm:w-[55%] lg:w-[31%]">
            {preview.map((tour) => (
              <TourCard key={tour.name} tour={tour} className="h-full" />
            ))}
          </AutoSlider>
        </Reveal>
      </div>
    </section>
  );
}
