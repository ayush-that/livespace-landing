import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 py-4">
        <Image
          src="/hero-section/logo.svg"
          alt="Livespace Logo"
          width={150}
          height={40}
          priority
        />
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-black">About Us</a>
          <a href="#" className="text-gray-600 hover:text-black">FAQ</a>
          <a href="#" className="text-gray-600 hover:text-black">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-black">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
}
