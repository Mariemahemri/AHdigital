import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground"; // ✅ import your background

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Modern Design Tool Landing Page",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
      >
        {/* ✅ Background animation */}
        <ParticlesBackground />

        {/* ✅ All content layered above the background */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
