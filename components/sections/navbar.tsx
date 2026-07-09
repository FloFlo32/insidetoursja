"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, CalendarCheck } from "lucide-react";
import { brand } from "@/brand.config";
import { navItems } from "@/lib/nav-items";
import { formatPhone } from "@/lib/format-phone";
import { tours } from "@/lib/tours";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const bookableTours = tours.filter((t) => t.activityId);

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [bookMenuOpen, setBookMenuOpen] = React.useState(false);
  const bookMenuRef = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
    setBookMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!bookMenuOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (bookMenuRef.current && !bookMenuRef.current.contains(e.target as Node)) {
        setBookMenuOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBookMenuOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [bookMenuOpen]);

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
          <div className="relative hidden sm:block" ref={bookMenuRef}>
            <Button
              type="button"
              size="default"
              onClick={() => setBookMenuOpen((o) => !o)}
              aria-expanded={bookMenuOpen}
              aria-haspopup="true"
            >
              Book Now
              <ChevronDown className={cn("size-3.5 transition-transform", bookMenuOpen && "rotate-180")} />
            </Button>
            <div
              className={cn(
                "absolute right-0 top-full w-80 pt-2 transition-all duration-150",
                bookMenuOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              )}
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-xl shadow-black/10">
                <p className="px-3 pb-1.5 pt-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Book instantly
                </p>
                {bookableTours.map((t) => (
                  <button
                    key={t.activityId}
                    type="button"
                    data-yetti-activity={t.activityId}
                    onClick={() => setBookMenuOpen(false)}
                    className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-foreground/85 transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {t.name}
                    <CalendarCheck className="size-4 shrink-0 text-primary" />
                  </button>
                ))}
                <div className="mt-1 border-t border-border pt-1">
                  <Link
                    href="/contact-us"
                    onClick={() => setBookMenuOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    Ask about another tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
            <div className="mt-3 rounded-2xl border border-white/10 p-3">
              <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                Book instantly
              </p>
              <div className="flex flex-col gap-1">
                {bookableTours.map((t) => (
                  <button
                    key={t.activityId}
                    type="button"
                    data-yetti-activity={t.activityId}
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
                  >
                    {t.name}
                    <CalendarCheck className="size-4 shrink-0 text-primary" />
                  </button>
                ))}
              </div>
            </div>
            <Button asChild className="mt-3">
              <Link href="/contact-us" onClick={() => setOpen(false)}>
                Ask About Another Tour
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
