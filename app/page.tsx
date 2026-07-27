import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";
import FeaturedPortfolio from "@/sections/FeaturedPortfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedPortfolio />
      <About />
    </>
  );
}