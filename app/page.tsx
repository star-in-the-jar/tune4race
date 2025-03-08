import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-auto">
        <Image
          src="hero-image.jpg"
          alt="Racing custom car with K22 engine"
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="contain"
        />
      </div>
      <footer className="flex flex-wrap justify-center items-center gap-6 row-start-3"></footer>
    </div>
  );
}
