import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { brand } from "@/brand.config";
import { navItems } from "@/lib/nav-items";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { formatPhone } from "@/lib/format-phone";

export function Footer() {
  const flatLinks = navItems.flatMap((item) => [item, ...(item.children ?? [])]);

  return (
    <footer className="mt-auto border-t border-border/70 bg-secondary/40">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative block size-12 overflow-hidden rounded-xl bg-white ring-1 ring-border">
              <Image src="/logo.webp" alt={brand.name} fill sizes="48px" className="object-contain p-1" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">{brand.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Providing safe fun tours in all of Jamaica. Taking you to hidden local gems, sites,
            beaches, and restaurants. The real Jamaican experience. Let&apos;s tour!
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://www.facebook.com/insidetourja"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2.5">
            {flatLinks.slice(0, 7).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">More</h4>
          <ul className="mt-4 space-y-2.5">
            {flatLinks.slice(7).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`tel:${brand.contact.phone}`}
                className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                {formatPhone(brand.contact.phone)}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${brand.social.email}`}
                className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                {brand.social.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {brand.contact.address}
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              Open every day, 8am - 9pm
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 py-6">
        <p className="container-px mx-auto max-w-7xl text-sm text-muted-foreground">
          © 2026 {brand.name}. It&apos;s more fun with us.
        </p>
      </div>
    </footer>
  );
}
