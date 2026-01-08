import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import Preloader from "@/components/animations/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JAY CREATIONS | Premium Clothing",
  description: "Experience the finest in fashion. Mobile-first, premium, and cinematic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <SmoothScroll>
          <Preloader />
          <Header />
          <main className="min-h-screen pt-0 pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
          <BottomNav />
        </SmoothScroll>
      </body>
    </html>
  );
}
