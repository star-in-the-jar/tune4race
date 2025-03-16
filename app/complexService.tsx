import Section from "./components/section";
import Subsection from "./components/subsection";
import { FC } from "react";
import Image from "next/image";

const ServiceCard = ({ service }: { service: string }) => {
  return (
    <div className="bg-blue-600 px-little-s py-little-xxs rounded-full">
      {service}
    </div>
  );
};

const ComplexService: FC = () => {
  const regularServices = [
    "Wulkanizacja",
    "Diagnostyka Komputerowa",
    "Wymiana Oleju, Filtrów",
    "Ustawienie Geometrii",
    "Mycie Ultradźwiękowe",
    "Układy Hamulcowe",
    "Wymiana Sprzęgła",
  ].sort((a, b) => a.length - b.length);

  const racingServices = [
    "Obsługa Techniczna na Torze",
    "Przygotowanie Aut do Sportu",
    "Montaż Klatki Bezpieczeństwa",
    "Transport Autolawetą",
    "Ustawienie Samochodu na Wagach",
    "Poprawa Aerodynamiki",
  ].sort((a, b) => a.length - b.length);

  return (
    <Section
      title="Kompleksowy Serwis"
      id="serwis"
      image="section_engine.png"
      imageAlt="Engine"
    >
      <Subsection title="Oferowane usługi" className="px-little-m md:px-big-s">
        <div className="flex flex-col gap-little-l">
          <div className="flex flex-col gap-little-l">
            <p className="pt-little-l text-clamp-text-m">
              Wierzymy, że aby być najlepszym trzeba wybrać określony obszar
              działalności. Oto lista usług, w których osiągnęliśmy wysoki
              poziom.
            </p>
            <h3 className="text-clamp-title-s">Dla Każdego</h3>
            <div className="flex flex-wrap justify-center gap-little-s">
              {regularServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
          <h3 className="text-clamp-title-s">Dla Aut Wyścigowych</h3>
          <div className="flex flex-wrap justify-center gap-little-s">
            {racingServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </Subsection>
      <Subsection
        title="Stawiamy na Jakość"
        className="px-little-m md:px-big-s"
      >
        <p className="py-little-xl text-clamp-text-s">
          Wszystkie prace wykonujemy z dużą starannością, a części do budowy lub
          do serwisu pochodzą od najlepszych firm na rynku.
        </p>
        <div className="gap-little-s md:gap-little-l grid grid-cols-3 w-full">
          <Image src="service_part_tire.jpg" alt="Tire" width={800} height={400} className="rounded-md"/>
          <Image src="service_part_rings.jpg" alt="Auto part" width={800} height={400} className="rounded-md"/>
          <Image src="service_part_rim.jpg" alt="Rime" width={800} height={400} className="rounded-md"/>
        </div>
      </Subsection>
      <Subsection title="10 Letnie Doświadczenie" className="px-little-m md:px-big-s">
        <p className="py-little-xl text-clamp-text-s">
            Dbamy o auta naszych klientów od lat i przez ten czas mieliśmy okację zobaczyć wiele oraz przekonać się jakie efekty dają różne podejścia. Zadbamy o wybór rozwiązań, na których można polegać.
        </p>
        <Image src="service_team.jpg" alt="Experience" width={800} height={400} className="rounded-md"/>
      </Subsection>
    </Section>
  );
};

export default ComplexService;
