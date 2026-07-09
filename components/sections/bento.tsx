import Image from "next/image";
import { Camera, Beer } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";

const rows = [
  {
    eyebrow: "Treat Yourself",
    title: "You can always count on us for an ice-cold one",
    body: "When you say Inside Tours Jamaica you can always think of local, beauty, fun. You are family, not a guest, from the moment we pick you up.",
    icon: Beer,
    image: "/stock/beach-toast-friends.webp",
    alt: "Friends toasting with cold drinks on the beach",
    reverse: false,
  },
  {
    eyebrow: "Relax. Enjoy.",
    title: "Photography packages so you never miss a moment",
    body: "We now offer photography packages so you can enjoy your day hassle free while we capture all your best moments on camera with our amazing lens. Inside Tours Jamaica, it's more fun with us.",
    icon: Camera,
    image: "/stock/beach-photographer.webp",
    alt: "A photographer capturing a guest's best moments on a Jamaica tour",
    reverse: true,
  },
];

export function Bento() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="flex flex-col gap-16 sm:gap-20">
        {rows.map((row) => (
          <div
            key={row.title}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              row.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/10">
                <Image
                  src={row.image}
                  alt={row.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={75}
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <row.icon className="size-5" />
              </span>
              <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {row.eyebrow}
              </span>
              <h2 className="mt-3 max-w-md text-balance text-3xl font-bold sm:text-4xl">
                {row.title}
              </h2>
              <p className="mt-4 max-w-md text-pretty text-muted-foreground">{row.body}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
