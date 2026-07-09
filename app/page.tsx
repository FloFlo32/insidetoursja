import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Bento } from "@/components/sections/bento";
import { JamaicaShowcase } from "@/components/sections/jamaica-showcase";
import { AboutPreview } from "@/components/sections/about-preview";
import { ToursPreview } from "@/components/sections/tours-preview";
import { TransfersPreview } from "@/components/sections/transfers-preview";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Bento />
        <JamaicaShowcase />
        <AboutPreview />
        <ToursPreview />
        <TransfersPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
