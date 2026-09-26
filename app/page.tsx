import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";
import FeaturedPortfolio from "@/sections/FeaturedPortfolio";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedPortfolio />
      <About />
      <Contact />
    </>
  );
}