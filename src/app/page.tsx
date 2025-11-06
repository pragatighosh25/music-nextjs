import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import { main } from "motion/react-client"


export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/20">
      <HeroSection />
      <FeaturedSection />
    </main>
  );
}
