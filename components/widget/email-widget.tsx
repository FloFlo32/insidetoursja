import { Mail } from "lucide-react";
import { brand } from "@/brand.config";

/**
 * Floating email button — opens the guest's mail app addressed to us.
 * Floats bottom-RIGHT so it never collides with the WhatsApp widget (bottom-left).
 */
export function EmailWidget() {
  const subject = encodeURIComponent(`Question for ${brand.name}`);
  return (
    <a
      href={`mailto:${brand.social.email}?subject=${subject}`}
      aria-label={`Email ${brand.name}`}
      className="floating-widget fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-200 hover:scale-105 active:scale-95 motion-reduce:transition-none"
    >
      <Mail className="size-6" />
    </a>
  );
}
