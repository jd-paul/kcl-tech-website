import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Share_Tech_Mono, Titillium_Web, Exo, Playfair_Display } from "next/font/google";

const shareTechMono = Share_Tech_Mono({
  weight: "400", // Share Tech Mono only has one weight
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
});
const titilliumWeb = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"], // Multiple weights for Titillium Web
  subsets: ["latin"],
  variable: "--font-titillium-web",
});
const exo = Exo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Multiple weights for Exo
  subsets: ["latin"],
  variable: "--font-exo",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"], // Multiple weights for Playfair Display
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shareTechMono.variable} ${titilliumWeb.variable} ${exo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
