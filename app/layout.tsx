import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Varex Group Limited | Engineering & Industrial Solutions",
  description: "Delivering Reliable Engineering & Industrial Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="antialiased bg-white text-gray-800">
        <Navbar />
        
        {/* Hapa ndipo kurasa zote (Home, About) zinapopita */}
        {children} 
        
        <Footer />
      </body>
    </html>
  );
}