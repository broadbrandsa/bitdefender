import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LockScreen from "@/components/lock-screen";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Resilience × Bitdefender — Proposal",
  description:
    "Bitdefender Subscriber Protection Platform — All-in-one cybersecurity designed to add value to your subscribers. A proposal by Digital Resilience.",
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
      <body className="min-h-full flex flex-col">
        <LockScreen>{children}</LockScreen>
      </body>
    </html>
  );
}
