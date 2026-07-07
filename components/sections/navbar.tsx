"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { navItems } from "@/lib/nav-items";
import { formatPhone } from "@/lib/format-phone";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-[oklch(0.16_0.018_150)] transition-all duration-300",
        scrolled
          ? "border-b border-white/10 shadow-lg shadow-black/20"
          : "border-b border-transparent"
      )}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="relative block size-11 overflow-hidden rounded-lg bg-white ring-1 ring-white/15">
            <Image
              src="/logo.webp"
              alt={brand.name}
              fill
              sizes="44px"
              priority
              className="object-contain p-1"
            />
          </span>
          <span className="hidden font-display text-base font-bold leading-tight tracking-tight text-white sm:block">
            {brand.name}
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-white/65 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {item.label}
                  <ChevronDown className="size-3.5" />
                </Link>
                <div
                  className={cn(
                    "absolute left-0 top-full w-72 pt-2 transition-all duration-150",
                    openDropdown === item.href
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  )}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.19_0.02_150)] p-2 shadow-xl shadow-black/30">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-white/65 hover:bg-white/10 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="default" className="hidden sm:inline-flex">
            <Link href="/contact-us">Book Now</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white xl:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[oklch(0.16_0.018_150)] xl:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3.5 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 flex flex-col border-l border-white/10 pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2.5 text-sm text-white/60 hover:bg-white/10 hover:text-white"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={`tel:${brand.contact.phone}`}
              className="mt-2 flex items-center gap-2 rounded-xl px-3.5 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
            >
              <Phone className="size-4 text-primary" />
              {formatPhone(brand.contact.phone)}
            </a>
            <Button asChild className="mt-2">
              <Link href="/contact-us" onClick={() => setOpen(false)}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
