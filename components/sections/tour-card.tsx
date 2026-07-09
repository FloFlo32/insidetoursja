import { CalendarCheck } from "lucide-react";
import type { Tour } from "@/lib/tours";
import { cn } from "@/lib/utils";

export function TourCard({ tour, className }: { tour: Tour; className?: string }) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10",
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tour.image}
          alt={tour.name}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.05] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="text-lg font-semibold leading-snug">{tour.name}</h3>
        <p className="flex-1 text-pretty text-sm text-muted-foreground">{tour.description}</p>
        <a
          href="/contact-us"
          data-yetti-activity=""
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          <CalendarCheck className="size-4" />
          Book Now
        </a>
      </div>
    </div>
  );
}
