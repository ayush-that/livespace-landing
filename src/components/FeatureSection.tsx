import Image from "next/image";
import { Grid3X3, ShoppingCart, Coins, Users } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => (
  <div className={`h-full ${className}`}>
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function FeatureSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col gap-4 mb-16">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <span className="text-gray-600">Feature</span>
        </div>
        <h2 className="text-[2.75rem] font-medium leading-tight">
          Empowering <span className="text-[#FF8A9B]">Designers</span> with
          <br />
          Innovative Features
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
        {/* Left Column */}
        <div className="flex flex-col gap-12 h-full">
          <FeatureCard
            className="bg-purple-50/60 rounded-3xl p-8"
            icon={
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <Grid3X3 className="w-6 h-6 text-purple-600" />
              </div>
            }
            title="Build Your Portfolio Instantly"
            description="Upload your designs effortlessly and showcase them to clients worldwide."
          />
          <FeatureCard
            className="bg-purple-50/60 rounded-3xl p-8"
            icon={
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
              </div>
            }
            title="E-commerce Ready"
            description="Sell furniture and decor directly through your designs."
          />
        </div>

        {/* Center Column - Image */}
        <div className="flex flex-col gap-4 h-full">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100/60 rounded-3xl p-8 flex flex-col gap-4 h-full">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <Coins className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium">
                  Monetize with AI Technology
                </h3>
                <p className="text-gray-600 text-sm">
                  Profitable automation using AI solutions.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-white flex-grow mt-2">
              <Image
                src="/feature/image.png"
                alt="Modern Wood Style"
                width={494}
                height={361}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="h-full">
          <FeatureCard
            className="bg-red-50/50 rounded-3xl p-8 h-full"
            icon={
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <Users className="w-6 h-6 text-red-400" />
              </div>
            }
            title="Connect Locally with Clients"
            description="Connect with local clients to build trust and strong relationships. Engage with nearby customers for better communication and personalized service.

Strengthening local connections enhances credibility, boosts loyalty, and creates valuable growth opportunities within your community."
          />
        </div>
      </div>
    </section>
  );
}
