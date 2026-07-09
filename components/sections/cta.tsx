import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";
import { formatPhone } from "@/lib/format-phone";

export function CTA() {
  return (
    <section id="cta" className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
          <GridPattern className="opacity-10" />
          <h2 className="relative mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
            Sit back, relax, leave it up to us
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-pretty text-primary-foreground/85">
            We keep smiles coming all day. {brand.name}, it&apos;s more fun with us.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact-us" data-yetti-activity="">
                Book Now <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={`tel:${brand.contact.phone}`}>
                <Phone className="size-4" /> {formatPhone(brand.contact.phone)}
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
