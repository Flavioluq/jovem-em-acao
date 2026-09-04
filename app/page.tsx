import Hero from "@/components/Hero";
import MethodologySteps from "@/components/MethodologySteps";
import RegionGrid from "@/components/RegionGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <MethodologySteps />
      <RegionGrid />
      <Contact />
      <Footer />
    </main>
  );
}
