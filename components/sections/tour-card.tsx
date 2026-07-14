import { CalendarCheck } from "lucide-react";
import type { Tour } from "@/lib/tours";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TourCard({ tour, className }: { tour: Tour; className?: string }) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tour.image}
          alt={tour.name}
          loading="lazy"
          decoding="async"
          className={cn(
            "size-full object-cover transition-transform duration-500 group-hover:scale-[1.05] motion-reduce:transition-none",
            tour.imagePosition === "top" ? "object-top" : "object-center"
          )}
        />
        {tour.activityId && (
          <Badge variant="accent" className="absolute left-3 top-3 bg-card/90 backdrop-blur">
            Book Instantly
          </Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="text-lg font-semibold leading-snug">{tour.name}</h3>
        <p className="flex-1 text-pretty text-sm text-muted-foreground">{tour.description}</p>
        <Button
          type="button"
          data-yetti-activity={tour.activityId ?? ""}
          className="mt-2 w-full"
        >
          <CalendarCheck className="size-4" />
          Book Now
        </Button>
      </div>
    </div>
  );
}
