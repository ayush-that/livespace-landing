import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import TransformSection from "@/components/TransformSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import PathwaySection from "@/components/PathwaySection";
import AIPrecisionSection from "@/components/AIPrecisionSection";
import StorySection from "@/components/StorySection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Transform Section */}
      <TransformSection />

      {/* Showcase Section */}
      <ShowcaseSection />

      {/* Pathway Section */}
      <PathwaySection />

      {/* AI Precision Section */}
      <AIPrecisionSection />

      {/* Story Section */}
      <StorySection />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
