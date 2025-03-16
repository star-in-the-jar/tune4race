"use client";
import Projects from "./projects";
import CallToAction from "./callToAction";
import ServicedByUs from "./servicedByUs";
import ComplexService from "./complexService";
import Hero from "./hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <CallToAction />
      <ServicedByUs />
      <ComplexService />
      <footer className="flex flex-wrap justify-center items-center gap-6 row-start-3"></footer>
    </div>
  );
}
