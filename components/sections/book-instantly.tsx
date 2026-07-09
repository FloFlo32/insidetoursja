import { CalendarCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const activities = [
  {
    name: "Pirate Tour",
    description: "Set sail on a swashbuckling adventure across the Caribbean waters.",
    image: "/stock/pirate-ship-sunset.webp",
    alt: "A pirate-style sailing ship at sunset",
    activityId: "47611e71-4496-4915-99ef-816cb4ec6fe2",
  },
  {
    name: "Snorkel Tour",
    description: "Explore vibrant coral reefs and warm turquoise waters up close.",
    image: "/stock/snorkel-reef-tour.webp",
    alt: "Guests snorkeling over a coral reef",
    activityId: "01083159-5861-4408-b78d-22c81e19faa4",
  },
  {
    name: "Sunset Cruise",
    description: "Toast the Jamaican sunset with friends aboard a relaxed evening cruise.",
    image: "/stock/beach-sunset-friends.webp",
    alt: "Friends enjoying a Jamaican sunset by the water",
    activityId: "8ff35752-c22a-41f6-b142-4679aa1d1fb4",
  },
];

export function BookInstantly() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Book Instantly
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-3 max-w-xl text-balance text-4xl font-bold sm:text-5xl">
              Reserve your spot in seconds
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
              Skip the back and forth. Pick an experience and book it online right now.
            </p>
          </Reveal>
        </div>
      </div>

      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-3">
        {activities.map((a) => (
          <RevealItem
            key={a.activityId}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.image}
                alt={a.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="text-lg font-semibold">{a.name}</h3>
              <p className="flex-1 text-pretty text-sm text-muted-foreground">
                {a.description}
              </p>
              <button
                type="button"
                data-yetti-activity={a.activityId}
                className={cn(buttonVariants({ size: "default" }), "mt-2 w-full")}
              >
                <CalendarCheck className="size-4" />
                Book Now
              </button>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
