import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./navbar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "tune4race.pl",
  description: "Serwis samochodowy i tuning wyścigowy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="z-10 isolate fixed">
         <NavBar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
