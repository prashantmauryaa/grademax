import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/landing/Section1_Problem";
import HowItWorks from "@/components/landing/Section2_HowItWorks";
import Features from "@/components/landing/Section3_Features";
import Ethical from "@/components/landing/Section4_Ethical";
import DemoPreview from "@/components/landing/Section5_Demo";
import Audience from "@/components/landing/Section6_Audience";
import FAQ from "@/components/landing/Section7_FAQ";
import CTA from "@/components/landing/Section8_CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <DemoPreview />
      <Ethical />
      <Audience />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
