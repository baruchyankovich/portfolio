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
  title: "Baruch Yankovitz | Backend Developer & AI Solutions",
  description:
    "Backend developer specializing in Node.js, TypeScript, AI solutions, and full-stack product delivery. Building scalable systems and intelligent applications.",
  keywords: [
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "AI",
    "Full Stack",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Baruch Yankovitz | Backend Developer & AI Solutions",
    description:
      "Backend developer specializing in Node.js, TypeScript, AI solutions, and full-stack product delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        {children}
      </body>
    </html>
  );
}
