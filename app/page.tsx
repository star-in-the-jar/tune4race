"use client";
import Projects from "./projects";
import CallToAction from "./callToAction";
import ServicedByUs from "./servicedByUs";
import ComplexService from "./complexService";
import Hero from "./hero";
import About from "./about";
import Reviews from "./reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <CallToAction title="GOTÓW STWORZYĆ SAMOCHÓD MARZEŃ?" />
      <ServicedByUs />
      <ComplexService />
      <About />
      <CallToAction title="WIDZIMY SIĘ NA MIEJSCU?" />
      <Reviews />
    </div>
  );
}
