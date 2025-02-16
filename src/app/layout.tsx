import type { Metadata } from "next";
import { Gemunu_Libre, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const gemunuLibre = Gemunu_Libre({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gemunu-libre",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Rio Selection",
  description:
    "Rio Selection - Transformamos ideias em sites modernos e responsivos. Criação de sites, soluções digitais, design e social media para impulsionar o seu negócio online.",
  keywords:
    "Criação de sites, soluções digitais, design responsivo, social media, desenvolvimento web, marketing digital, sites modernos",
  openGraph: {
    title: "Rio Selection",
    description:
      "Transformamos ideias em sites modernos e responsivos. Impulsione o seu negócio online com soluções digitais inovadoras.",
    images: "/logo.png",
    url: "https://www.riocollection.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${gemunuLibre.variable} ${roboto.variable} bg-black `}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
