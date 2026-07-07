import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { AirportTransferDetail } from "@/components/sections/airport-transfer-detail";

export const metadata: Metadata = {
  title: "Montego Bay Airport Transfers",
  description: `Private, air-conditioned airport transfers from Sangster International Airport, Montego Bay, with ${brand.name}.`,
};

export default function MontegoBayTransfersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AirportTransferDetail
          title="Montego Bay Airport Transfers"
          airportName="Sangster International Airport"
          heroImage="/ingested/insidetoursja/img-039.webp"
          bodyOne="With our safe, professional drivers you don't need to worry when you arrive at the MBJ Airport. They will be waiting outside the terminal exit with our company sign in their hands and begin your journey with our new comfortable vehicles."
          bodyTwo="Sangster International Airport Montego Bay, Jamaica is a leading tourism gateway to the island of Jamaica, among the world's most desired and beautiful destinations. The airport is located northwest of the island and is close to a wide range of resorts as well as hotel facilities."
          planText="Enjoy the freedom of having your transportation waiting for you when you arrive in Jamaica. Travel to your hotel or resort knowing that a punctual and safe trip to your destination awaits you."
        />
      </main>
      <Footer />
    </>
  );
}
