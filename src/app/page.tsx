import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import { Testimonials } from "@/components/Testimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/20">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <Testimonials />
      <UpcomingWebinars />
      <Instructor />
    </main>
  );
}
