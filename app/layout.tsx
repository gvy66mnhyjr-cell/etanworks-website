import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StickyCTA from "@/components/StickyCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://etanworks.co.ke"),

  title: {
    default: "Etanworks | Earthmoving & Civil Engineering Contractors",
    template: "%s | Etanworks",
  },

  description:
    "Etanworks is a trusted Kenyan contractor specializing in earthmoving, excavation, grading, site preparation, infrastructure development, and heavy equipment services.",

  keywords: [
    "Etanworks",
    "Earthmoving Kenya",
    "Excavation Kenya",
    "Civil Engineering Kenya",
    "Heavy Equipment",
    "Site Preparation",
    "Bulk Excavation",
    "Road Construction",
    "Infrastructure Development",
    "Construction Company Kenya",
  ],

  authors: [
    {
      name: "Etanworks",
      url: "https://etanworks.co.ke",
    },
  ],

  creator: "Etanworks",
  publisher: "Etanworks",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Etanworks | Earthmoving & Civil Engineering Contractors",
    description:
      "Professional earthmoving, excavation, grading, and civil engineering services across Kenya.",
    url: "https://etanworks.co.ke",
    siteName: "Etanworks",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Etanworks",
    description:
      "Professional earthmoving and civil engineering services across Kenya.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}