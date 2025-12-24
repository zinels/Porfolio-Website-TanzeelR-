import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "💻 Tanzeel Rahman | Software Engineer",
  description: "Software Engineer Intern focused on backend + application development. I ship real software systems.",
  keywords: ["Tanzeel Rahman", "Software Engineer", "Intern", "Backend Development", "Full Stack", "Portfolio"],
  authors: [{ name: "Tanzeel Rahman" }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    title: "Tanzeel Rahman | Software Engineer",
    description: "Software Engineer focused on backend + application development. I ship real software systems.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tanzeel Rahman - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanzeel Rahman | Software Engineer',
    description: 'Software Engineer focused on backend + application development. I ship real software systems.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

