export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

/** Mirrors the exact menu structure of insidetoursja.com. */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  {
    label: "Airport Transfers",
    href: "/airport-transfers",
    children: [
      { label: "Montego Bay Airport Transfers", href: "/montego-bay-airport-transfers" },
      { label: "Kingston Airport Transfers", href: "/kingston-airport-transfers" },
    ],
  },
  { label: "Tours & Excursions", href: "/tours-excursions" },
  { label: "About Us", href: "/about-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
];
