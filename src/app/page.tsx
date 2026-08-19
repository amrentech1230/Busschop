import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Craftsmanship from "@/components/Craftsmanship";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import AfterSales from "@/components/AfterSales";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Craftsmanship />
        <Process />
        <Projects />
        <Testimonial />
        <AfterSales />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
