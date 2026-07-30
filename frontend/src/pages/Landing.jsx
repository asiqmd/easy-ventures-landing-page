import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import EditorialMarquee from "@/components/site/EditorialMarquee";
import Brands from "@/components/site/Brands";
import Transportation from "@/components/site/Transportation";
import MissionVision from "@/components/site/MissionVision";
import Leadership from "@/components/site/Leadership";
import Culture from "@/components/site/Culture";
import EasyTruck from "@/components/site/EasyTruck";
import EasyBrick from "@/components/site/EasyBrick";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Landing() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div className="relative min-h-screen bg-[#F7F8FA] text-slate-900">
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-electric"
      />
      <Navbar />
      <main>
        <Hero />
        <EditorialMarquee />
        <Brands />
        <Transportation />
        <MissionVision />
        <Leadership />
        <Culture />
        <EasyTruck />
        <EasyBrick />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
