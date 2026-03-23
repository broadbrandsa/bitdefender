import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { LockProvider } from "@/components/lock-context";
import LockScreen from "@/components/lock-screen";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
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
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LockProvider>
          <LockScreen>{children}</LockScreen>
        </LockProvider>
      </body>
    </html>
  );
}
