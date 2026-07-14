import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { AirportTransferDetail } from "@/components/sections/airport-transfer-detail";

export const metadata: Metadata = {
  title: "Kingston Airport Transfers",
  description: `Private, air-conditioned airport transfers from Norman Manley International Airport, Kingston, with ${brand.name}.`,
};

export default function KingstonTransfersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AirportTransferDetail
          title="Kingston Airport Transfers"
          airportName="Norman Manley International Airport"
          heroImage="/ingested/insidetoursja/img-airport-transfer-exit.webp"
          secondaryImage="/ingested/insidetoursja/img-airport-transfer-pickup.webp"
          secondaryImageAlt="Guests posing with their Inside Tours Jamaica driver after airport pickup"
          bodyOne="With our safe, professional drivers you don't need to worry when you arrive at Kingston Airport. They will be waiting outside the terminal exit with our company sign in their hands and begin your journey with our new comfortable vehicles."
          bodyTwo="Norman Manley International Airport sits on a beautiful peninsula in a side-by-side beautiful view and vicinity of the historiographical land site of Port Royal. It is also within 30 minutes driving distance of Jamaica's main business district of New Kingston."
          planText="Enjoy the freedom of having your transportation waiting for you when you arrive in Jamaica. Sit back and relax as you are transported in air-conditioned comfort. With our private transfers, there are no unwanted stops or delays."
        />
      </main>
      <Footer />
    </>
  );
}
