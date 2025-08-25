import type { Metadata } from "next";
import { Geist, Geist_Mono, Itim } from "next/font/google";
import "./globals.css";
import ScrollProgress from "../../src/components/ScrollProgress"
import CustomCursor from "../../src/components/CustomCursor"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const itim = Itim({
  subsets: ["latin"],
  weight: "400", // Itim has only regular 400
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokesh--->Portfolio",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${itim.className} antialiased bg-white px-2 md:px-10 py-1 md:py-4 `}
      >
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
