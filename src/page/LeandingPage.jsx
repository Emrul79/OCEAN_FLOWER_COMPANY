import React from "react";
import GallerySection from "../components/TestWithMOtion";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import InteractiveMap from "./Location";
import Services from "./Services";
import ManpowerTimeline from "./Timeline";
import VisionAndClients from "./Vision";

export default function LeandingPage() {
  return (
    <main className="pt-0">
      <Hero />
      <AboutUs />
      <Services />
      <ManpowerTimeline />
      <GallerySection />
      <VisionAndClients />
      <InteractiveMap />
    </main>
  );
}
