import Image from "next/image";

const Hero = () => {
  return (
    <section className={`relative w-full h-auto`}>
      <Image
        src="hero-image.jpg"
        alt="Racing custom car with K22 engine"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default Hero;
