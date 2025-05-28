import type { Metadata } from "next";
import Script from "next/script";
import { Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

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
      <head>
        <meta name="google-site-verification" content="aPkK8uKcFnWxU-hvl-BM8QBPrJNFDYTWLM70o2JTNLk" />
      </head>
      <body className={`${sourceSans.variable} antialiased max-w-[1920px] mx-auto no-js`}>
        <Header />
        {children}
        <Footer />
        {/* Load gtag.js from Google Tag Manager */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-M961LTZQ9W" strategy="afterInteractive" />

        {/* Initialize GA4 */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-M961LTZQ9W', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
