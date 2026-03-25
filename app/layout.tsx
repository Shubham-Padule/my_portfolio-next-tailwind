import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/shared/SplashCursor"; // SplashCursor import karein

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham | MERN Stack Developer", // Aapka professional title
  description: "Portfolio of a Pune-based Frontend Architect with 1.5 years experience specialized in Next.js and MERN stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-white selection:bg-indigo-500/30 overflow-x-hidden">
        {/* React Bits Style Splash Cursor - Sabse upar */}
        <SplashCursor />
        
        {/* Main Content Wrapper */}
        <main className="relative z-10 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}