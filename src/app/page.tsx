import { Hero } from "@/components/home/Hero";
import { Products } from "@/components/home/Products";
import { Philosophy } from "@/components/home/Philosophy";
import { TechStack } from "@/components/home/TechStack";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-24">
      <Hero />
      <Products />
      <Philosophy />
      <TechStack />
      <About />
      <Contact />
    </div>
  );
}
