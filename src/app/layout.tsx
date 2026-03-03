import type { Metadata, Viewport } from "next";
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senda & Sombra | Home & Body Sensory Kit",
  description: "Objects with soul. Spaces with meaning. Curated sensory kits to transform your home into a sanctuary.",
};

export const viewport: Viewport = {
  themeColor: "#FAF6F1", // senda-cream
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${playfair.variable} font-josefin antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
