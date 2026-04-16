import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorDot from "@/components/CursorDot";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "PRODKT — Production Techniques for Electronic Music",
  description: "Production techniques for electronic music.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body>
        <CursorDot />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
