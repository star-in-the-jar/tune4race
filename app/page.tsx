import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-[calc(100vh-var(--space-big-s))]">
        <Image
          src="hero-image.png"
          alt="Racing custom car with K22 engine"
          fill
        />
      </div>
      <footer className="flex flex-wrap justify-center items-center gap-6 row-start-3">
      </footer>
    </div>
  );
}
