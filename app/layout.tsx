import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ammar Ameera Ahmad | Portfolio",
  description: "Personal portfolio website of Ammar Ameera Ahmad — Electrical Engineering student at UGM, exploring web development and data analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-dark-navy text-foreground font-sans antialiased">{children}</body>
    </html>
  );
}