import Image from "next/image";

interface SubsectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Subsection = ({ title, children, className, id }: SubsectionProps) => {
  return (
    <section id={id} className={`relative mt-big-s `}>
      <Image
        src="arrows-primary.svg"
        alt="Arrows pointing to the right"
        width={512}
        height={256}
        className="w-2/3 sm:w-1/3 md:w-1/4"
      />
      <h2 className="top-0 left-little-xl absolute text-clamp-title-s md:text-clamp-title-m">
        {title}
      </h2>
      <div className={`${className}`}>{children}</div>
    </section>
  );
};

export default Subsection;
