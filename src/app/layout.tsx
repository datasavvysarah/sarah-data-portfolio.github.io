import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarah Iniobong Uko | Data Engineer & Analyst",
  description: "Architecting data pipelines. Visualizing business truth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col selection:bg-indigo-500/30 selection:text-white bg-zinc-950 text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
