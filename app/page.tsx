"use client";
import Image from "next/image";
import Projects from "./projects";

export default function Home() {
  return (
    <div>
      <section className={`relative w-full h-auto`}>
        <Image
          src="hero-image.jpg"
          alt="Racing custom car with K22 engine"
          layout="responsive"
          loading="eager"
          width={1920}
          height={1080}
          objectFit="contain"
        />
      </section>
      <Projects />
      <footer className="flex flex-wrap justify-center items-center gap-6 row-start-3"></footer>
    </div>
  );
}
