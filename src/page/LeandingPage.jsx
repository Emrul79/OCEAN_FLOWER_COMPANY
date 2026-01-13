import React from "react";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import InteractiveMap from "./Location";
import Services from "./Services";
import VisionAndClients from "./Vision";

export default function LeandingPage() {
  return (
    <main className="pt-0">
      <Hero />
      <AboutUs />
      <Services />
      <VisionAndClients />
      <InteractiveMap />
    </main>
  );
}
