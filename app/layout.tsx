import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Perry Harlock, UI Developer / Designer in Kent and London",
  description: "Online portfolio of Perry Harlock, a kent based UI Developer / Designer working in London",
  keywords: [
    "web development",
    "web developer",
    "ui designer",
    "ui developer",
    "nextjs developer",
    "react developer",
    "london",
  ],
  applicationName: "Perry Harlock",
  openGraph: {
    title: "Portfolio of Perry Harlock, UI Developer / Designer in Kent and London",
    description: "Online portfolio of Perry Harlock, a kent based UI Developer / Designer working in London",
    url: "https://perryharlock.co.uk",
    type: "website",
    images: ["https://www.perryharlock.co.uk/perry.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sourceSans.variable} antialiased max-w-[1920px] mx-auto no-js`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
