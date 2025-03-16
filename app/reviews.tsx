import Link from "next/link";
import Section from "./components/section";
import Subsection from "./components/subsection";
import { reviews } from "./utils/reviews";

const Reviews = () => (
  <Section
    title="Opinie Naszych Klientów"
    id="opinie"
    image="section_reviews.png"
    imageAlt="Trophies"
  >
    <Subsection title="Ocena 4.9/5" className="p-big-s">
      <h3 className="text-clamp-subtitle-s sm:text-clamp-subtitle-m">
        Ponad 100 opinii na{" "}
        <Link
          className="hover:opacity-50 underline transition"
          href="https://www.google.com/search?q=tune4race"
          target="_blank"
        >
          Google
        </Link>{" "}
        i{" "}
        <Link
          className="hover:opacity-50 underline transition"
          href="https://www.facebook.com/tune4race/reviews"
          target="_blank"
        >
          Facebook
        </Link>
      </h3>
      <div className="gap-little-l grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-little-l">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="flex flex-col gap-little-l bg-secondary-polished-gradient px-little-xxl py-little-xl rounded-lg"
          >
            <div>
              <h4 className="text-clamp-subtitle-s sm:text-clamp-subtitle-m">
                {review.name}
              </h4>
              <p className="text-clamp-text-s">{review.date}</p>
            </div>
            <p className="text-clamp-text-m">{review.review}</p>
          </div>
        ))}
      </div>
    </Subsection>
  </Section>
);

export default Reviews;
