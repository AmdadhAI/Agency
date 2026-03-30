import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { client } from "../../../sanity/lib/client";

export const metadata: Metadata = {
  title: "RestauReach | Restaurant Marketing Agency",
  description:
    "Data-driven growth systems for the modern hospitality industry. Stop burning cash on vanity metrics — we engineer revenue engines.",
};

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch global settings
  const globalSettings = await client.fetch(`*[_type == "globalSettings"][0]`) || {};

  return (
    <>
      <SmoothScroll />
      <Navigation globalSettings={globalSettings} />
      {children}
      <Footer globalSettings={globalSettings} />
    </>
  );
}

