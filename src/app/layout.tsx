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
  title: "Software Engineer Intern | Portfolio",
  description: "Software Engineer Intern focused on backend + application development. I ship real software systems.",
  keywords: ["Software Engineer", "Intern", "Backend Development", "Full Stack", "Portfolio"],
  authors: [{ name: "Software Engineer Intern" }],
  openGraph: {
    type: "website",
    title: "Software Engineer Intern | Portfolio",
    description: "Software Engineer Intern focused on backend + application development. I ship real software systems.",
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

