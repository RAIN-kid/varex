import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Operations from '@/components/Operations';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Operations />
      <Partners />
    </main>
  );
}