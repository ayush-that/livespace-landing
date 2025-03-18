import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative mx-8 sm:mx-12 lg:mx-20 my-8 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50/90">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-12 py-16 gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-purple-600"></span>
            <span className="text-sm">Design</span>
            <span className="h-2 w-2 rounded-full bg-red-500"></span>
            <span className="text-sm">Innovation</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight">
            Turn Your Designs into Revenue and Recognition
          </h1>
          
          <p className="text-gray-600 text-lg">
            Showcase your portfolio, monetize your work, and connect with local clients—all with the power of AI.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium">
              Let's Get Started
            </button>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">125M+ Total Designers</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <Image
            src="/hero-section/right.png"
            alt="Interior Design Showcase"
            width={600}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold">Fast</span>
              <span className="font-semibold">Secure</span>
              <span className="font-semibold">Accessible</span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <div>
                <div className="text-2xl font-bold">125K+</div>
                <div className="text-sm text-gray-600">Overall Value</div>
              </div>
              <div>
                <div className="text-2xl font-bold">825M+</div>
                <div className="text-sm text-gray-600">Money Potential</div>
              </div>
              <div>
                <div className="text-2xl font-bold">0.25%</div>
                <div className="text-sm text-gray-600">Fixed Probability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
