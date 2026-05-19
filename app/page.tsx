import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { NewModel } from "@/components/sections/NewModel";
import { ProductExperience } from "@/components/sections/ProductExperience";
import { AlignmentEngine } from "@/components/sections/AlignmentEngine";
import { RealWorld } from "@/components/sections/RealWorld";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Vision } from "@/components/sections/Vision";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <NewModel />
        <ProductExperience />
        <AlignmentEngine />
        <RealWorld />
        <Ecosystem />
        <Vision />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
