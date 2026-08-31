import { Mail } from "lucide-react";
import type { Tour } from "@/lib/tours";
import { brand } from "@/brand.config";
import { WhatsAppIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TourCard({ tour, className }: { tour: Tour; className?: string }) {
  const whatsappNumber = brand.contact.whatsapp.replace(/[^\d]/g, "");
  const whatsappText = encodeURIComponent(
    `Hi ${brand.name}, I'd like to enquire about the ${tour.name} (private tour).`
  );
  const emailSubject = encodeURIComponent(`Enquiry: ${tour.name}`);
  const emailBody = encodeURIComponent(
    `Hi ${brand.name},\n\nI'd like to enquire about the ${tour.name} (private tour).\n\n`
  );

  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tour.image}
          alt={tour.name}
          loading="lazy"
          decoding="async"
          className={cn(
            "size-full object-cover transition-transform duration-500 group-hover:scale-[1.05] motion-reduce:transition-none",
            tour.imagePosition === "top" ? "object-top" : "object-center"
          )}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="text-lg font-semibold leading-snug">{tour.name}</h3>
        <p className="flex-1 text-pretty text-sm text-muted-foreground">{tour.description}</p>
        <div className="mt-2 flex gap-2">
          <Button asChild className="flex-1">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <a href={`mailto:${brand.social.email}?subject=${emailSubject}&body=${emailBody}`}>
              <Mail className="size-4" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
