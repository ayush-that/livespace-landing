import Image from "next/image";

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
  <div className={`${className}`}>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-12">
          <FeatureCard
            className="bg-purple-50/60 rounded-3xl p-8"
            icon={
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 16v4h4v-4H4zm10 0v4h4v-4h-4zm-10-6v4h4v-4H4zm10 0v4h4v-4h-4zM4 4v4h4V4H4zm10 0v4h4V4h-4z"/>
                </svg>
              </div>
            }
            title="Build Your Portfolio Instantly"
            description="Upload your designs effortlessly and showcase them to clients worldwide."
          />
          <FeatureCard
            className="bg-purple-50/60 rounded-3xl p-8"
            icon={
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V4h10v16zm-1-7h-3V8h-2v5H8l4 4 4-4z"/>
                </svg>
              </div>
            }
            title="E-commerce Ready"
            description="Sell furniture and decor directly through your designs."
          />
        </div>

        {/* Center Column - Image */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-medium">Monetize with AI Technology</h3>
              <p className="text-gray-600 text-sm">Profitable automation using AI solutions.</p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden bg-white">
            <Image
              src="/feature/image.png"
              alt="Modern Wood Style"
              width={494}
              height={361}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-medium">Modern Wood Style</p>
              <p className="text-xs text-gray-600">Minimal, sophisticated and marble effect tiles</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <FeatureCard
          className="bg-red-50/50 rounded-3xl p-8"
          icon={
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 12c1.38 0 2.5-1.12 2.5-2.5S17.88 7 16.5 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zm0-3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>
            </div>
          }
          title="Connect Locally with Clients"
          description="Connect with local clients to build trust and strong relationships. Engage with nearby customers for better communication and personalized service.

Strengthening local connections enhances credibility, boosts loyalty, and creates valuable growth opportunities within your community."
        />
      </div>
    </section>
  );
}
