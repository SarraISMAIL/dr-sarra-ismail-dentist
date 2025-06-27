import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Sarra ISMAIL - Dentiste Expert à Sfax, Tunisie",
  description: "Cabinet dentaire du Dr. Sarra ISMAIL à Sfax. Soins dentaires professionnels, implants, orthodontie et esthétique dentaire. Prenez rendez-vous dès aujourd'hui.",
  keywords: "dentiste Sfax, cabinet dentaire Sfax, Dr Sarra ISMAIL, soins dentaires Tunisie, implants dentaires, orthodontie",
  authors: [{ name: "Dr. Sarra ISMAIL" }],
  openGraph: {
    title: "Dr. Sarra ISMAIL - Dentiste Expert à Sfax",
    description: "Cabinet dentaire professionnel à Sfax, Tunisie. Soins dentaires de qualité.",
    type: "website",
    locale: "fr_TN",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
