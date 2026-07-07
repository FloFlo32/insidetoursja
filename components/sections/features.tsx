import Link from "next/link";
import { Compass, Plane, Sparkles, CalendarRange, ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Book your airport transportation with us and experience the greatest (discount) ever inside tours Jamaica.",
    href: "/airport-transfers",
  },
  {
    icon: Sparkles,
    title: "Excursions",
    description: "Let's take on this amazing journey for a one of a kind experience.",
    href: "/tours-excursions",
  },
  {
    icon: CalendarRange,
    title: "Customized Trip",
    description:
      "We at Inside Tours Jamaica create the best tour packages allowing you and yours to enjoy 2 or 3 tours in one exciting day.",
    href: "/services",
  },
];

export function Features() {
  return (
    <section id="services" className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          What we do
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
          Our Services
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
          With Inside Tours Jamaica, you are family not a guest. We make sure you feel the
          warmth the fun, the laughter, service at your finger tips, its more fun with us.
        </p>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
  );
}
