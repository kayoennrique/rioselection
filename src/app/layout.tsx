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
  title: "Rio Selection - Paintball Team",
  description:
    "Join Rio Selection, a paintball team driven by strategy, speed, and teamwork. We compete fiercely and train hard to dominate every battle.",
  keywords:
    "paintball, paintball team, Rio Selection, paintball tournaments, extreme sports, strategy, competition, professional paintball",
  openGraph: {
    title: "Rio Selection - Paintball Team",
    description:
      "Be part of Rio Selection! A competitive paintball team passionate about teamwork and victory. Join us on the battlefield!",
    images: "/rio-selection-banner.png",
    url: "https://www.rioselection.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rio Selection - Paintball Team",
    description:
      "Discover the strength and strategy of Rio Selection, a paintball team ready for any battle!",
    images: "/rio-selection-banner.png",
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
