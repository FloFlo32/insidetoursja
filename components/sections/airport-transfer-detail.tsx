import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Image as ImageIcon, CreditCard } from "lucide-react";
import { brand } from "@/brand.config";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { ImageCard } from "@/components/magic/image-card";
import { formatPhone } from "@/lib/format-phone";

const inclusions = [
  "Air-conditioned vehicle",
  "Complimentary drink",
  "Professional driver",
  "All fees and taxes",
  "Private transportation",
];

export function AirportTransferDetail({
  title,
  airportName,
  heroImage,
  bodyOne,
  bodyTwo,
  planText,
  secondaryImage,
  secondaryImageAlt,
}: {
  title: string;
  airportName: string;
  heroImage: string;
  bodyOne: string;
  bodyTwo: string;
  planText: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={title}
        title={title}
        description={bodyOne}
        image={heroImage}
        imageAlt={`${airportName} private transfer vehicle`}
        imagePosition="top"
      />

      <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Jamaica
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              What includes in your trip
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">{bodyTwo}</p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {inclusions.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact-us">
                  Inquire / Book Now <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${brand.contact.phone}`}>
                  <Phone className="size-4" /> {formatPhone(brand.contact.phone)}
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={brand.payment.paypalMe} target="_blank" rel="noopener noreferrer">
                  <CreditCard className="size-4" /> Pay Now
                </a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Pay Now redirects to our secure PayPal page. Enter your amount and follow the
              steps to complete your payment.
            </p>
          </Reveal>

          <RevealGroup className="flex flex-col gap-5">
            {secondaryImage && (
              <RevealItem>
                <ImageCard
                  src={secondaryImage}
                  alt={secondaryImageAlt ?? `${airportName} guests with their driver`}
                  title="Your driver is waiting"
                  description="Same friendly faces, every trip. We treat you like family from the moment you land."
                  ratio="aspect-[4/3]"
                  imagePosition="top"
                />
              </RevealItem>
            )}
            <RevealItem className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Plan a Visit
              </span>
              <p className="mt-3 text-pretty text-sm text-muted-foreground">{planText}</p>
            </RevealItem>
            <RevealItem className="rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Support 24/7
              </span>
              <p className="mt-3 text-pretty text-sm text-muted-foreground">
                Private message us using any of these links here to learn more about our
                transfers and excursions packages.
              </p>
              <Link
                href="/gallery"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                <ImageIcon className="size-4" /> View Our Gallery
              </Link>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
