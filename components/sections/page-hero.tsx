import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: "center" | "top";
}) {
  return (
    <section className="relative overflow-hidden bg-secondary/40">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="size-3.5" />
              <span className="text-foreground">{eyebrow}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-xl text-balance text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-pretty text-lg text-muted-foreground">
              {description}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
              className={cn("object-cover", imagePosition === "top" ? "object-top" : "object-center")}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
