import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, ArrowRight, CreditCard } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Map } from "@/components/sections/map";
import { ContactForm } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { formatPhone } from "@/lib/format-phone";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${brand.name}: call, email, or send a message to plan your Jamaica tour.`,
};

const infoCards = [
  {
    icon: Phone,
    label: "Call us",
    value: formatPhone(brand.contact.phone),
    href: `tel:${brand.contact.phone}`,
  },
  {
    icon: Mail,
    label: "Email us",
    value: brand.social.email,
    href: `mailto:${brand.social.email}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open every day, 8am - 9pm",
    href: null,
  },
  {
    icon: CreditCard,
    label: "Pay Now",
    value: "Pay via PayPal",
    href: brand.payment.paypalMe,
    external: true,
  },
];

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact Us"
          title="Let's plan your visit"
          description="Private message us using any of these links here to learn more about our transfers and excursions packages, or send us a message below."
          image="/ingested/insidetoursja/img-089.webp"
          imageAlt="Guests ready for their Inside Tours Jamaica adventure"
        />

        <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => {
              const inner = (
                <>
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <card.icon className="size-5" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    {card.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold">{card.value}</p>
                </>
              );
              return (
                <RevealItem key={card.label}>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className="block h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full rounded-2xl border border-border bg-card p-6">{inner}</div>
                  )}
                </RevealItem>
              );
            })}
          </RevealGroup>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Send Us a Message
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
                We&apos;d love to hear from you
              </h2>
              <div className="mt-7">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Support 24/7
                </span>
                <p className="text-pretty text-muted-foreground">
                  You are only a DM away to reserve your date with us. Inbox us for our
                  special rates today.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/insidetourja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40"
                  >
                    <FacebookIcon className="size-4" /> Facebook
                  </a>
                  <a
                    href={brand.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40"
                  >
                    <InstagramIcon className="size-4" /> Instagram
                  </a>
                </div>
                <div className="mt-auto pt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/services">
                      View Our Services <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Map />
      </main>
      <Footer />
    </>
  );
}
