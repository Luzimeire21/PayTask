import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <Work />
      
      <About />
    </div>
  );
}
