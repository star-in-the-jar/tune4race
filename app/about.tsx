import Section from "./components/section";
import Subsection from "./components/subsection";
import Image from "next/image";
const About = () => {
  return (
    <Section
      title="O Firmie"
      id="o-firmie"
      image="section_about.png"
      imageAlt="S2000 Racing Car"
    >
      <Subsection title="O Nas" className="px-little-m md:px-big-s">
        <div className="flex flex-wrap md:flex-nowrap gap-big-s pt-big-s">
          <div className="flex flex-col flex-grow-2 gap-little-l text-clamp-text-m">
            <p>
              Firma Tune4race powstała by spełniać motoryzacyjne fantazje
              klientów. Do każdego projektu podchodzimy indywidualnie, nie każdy
              samochód jest autem wyścigowym, ale każdy może nam umilać czas
              spędzony za kółkiem.
            </p>
            <p className="text-clamp-text-s">
              Od 10 lat pomagamy spełniać motoryzacjne marzenia.
            </p>
            <p className="text-clamp-text-s">
              Sprawimy, by Twoje auto dało więcej frajdy, gdy pojedziesz na tor
              wyścigowy, ale także stojąc w korku.
            </p>
            <div>
              <p>Zapraszam </p>
              <p>Olejniczak Michał</p>
            </div>
          </div>
          <Image
            src="logo.png"
            alt="Tune4race Logo - car drawn with a line and the word Tune4race"
            width={1920}
            height={1080}
            className="w-full md:w-3/5 object-contain"
          />
        </div>
      </Subsection>
      <Subsection
        title="Kontakt"
        id="kontakt"
        className="flex md:flex-row flex-col justify-center gap-little-l px-little-m md:px-big-s py-little-l"
      >
        <div className="flex flex-col gap-little-l">
          <div>
            <h3>Adres</h3>
            <p>ul. Graniczna 44 </p>
            <p>62-081 Przeźmierowo</p>
          </div>
          <div>
            <h3>Biuro tel.</h3>
            <a href="tel:+48609045541" className="hover:opacity-50 underline transition">609 045 541</a>
          </div>
          <div>
            <h3>Warsztat tel.</h3>
            <a href="tel:+48577500184" className="hover:opacity-50 underline transition">577 500 184</a>
          </div>
          <div>
            <h3>Email</h3>
            <a href="mailto:serwis@tune4race.pl" className="hover:opacity-50 underline transition">serwis@tune4race.pl</a>
          </div>
          <div>
            <h3>Godziny otwarcia</h3>
            <p>pn-pt 8:00-17:00*</p>
          </div>
          <div>
            <p>*Istnieje możliwość spotkania się w innych godzinach lub w sobotę po wcześniejszym umówieniu się telefonicznym.</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d860.1127455916426!2d16.794901454015495!3d52.42903350017376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470446a0453ae637%3A0x1e88cc687726d92!2stune4race!5e0!3m2!1spl!2spl!4v1742131733286!5m2!1spl!2spl"
          loading="lazy"
          className="rounded-lg w-full aspect-video"
        />
      </Subsection>
    </Section>
  );
};

export default About;
