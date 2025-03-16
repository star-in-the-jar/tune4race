
import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
  title: string;
  id: string;
  image: string;
  imageAlt: string;
  className?: string;
}

const Section = ({ children, title, id, image, imageAlt, className }: SectionProps) => {
  return (
    <section
      className={`mt-[10vh] w-full h-auto scroll-mt-[10vh] ${className}`}
      id={id}
    >
      <div className="isolate relative w-full h-auto">
         <Image
          className="z-2 w-2/3 lg:w-1/2"
          src={image}
          alt={imageAlt}
          width={768}
          height={512}
        />
        <Image
          className="top-0 left z-[-1] absolute"
          src="arrows-primary.svg"
          alt="Arrows pointing to the right"
          width={768}
          height={512}
        />
        <h1 className="top-0 right-little-xxl z-3 absolute font-bold text-clamp-title-s sm:text-clamp-title-m md:text-clamp-title-l uppercase">
          {title}
        </h1>
      </div>
      {children}
    </section>
  );
};

export default Section;
