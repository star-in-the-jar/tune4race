import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="justify-center items-center gap-little-l grid grid-cols-1 sm:grid-cols-3 bg-background-polished-gradient p-little-l text-foreground-80 text-center">
      <div className="flex justify-center gap-little-s">
        <Link
          target="_blank"
          className="hover:opacity-50 underline transition"
          href="https://www.facebook.com/tune4race"
        >
          Facebook
        </Link>
        <Link
          target="_blank"
          className="hover:opacity-50 underline transition"
          href="https://www.instagram.com/tune4race"
        >
          Instagram
        </Link>
      </div>
      <div>
        <p>2015-{currentYear} &copy; Tune4Race</p>
        <p>Wszelkie prawa zastrzeżone</p>
      </div>
      <div>
        <p>
          Realizacja:&nbsp;
          <Link
            target="_blank"
            className="hover:opacity-50 underline transition"
            href="https://github.com/star-in-the-jar"
          >
            Stanisław Jarocki
          </Link>
        </p>
      </div>
    </footer>
  );
}
