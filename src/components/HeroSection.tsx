import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative mx-4 sm:mx-8 lg:mx-20 my-4 sm:my-8 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50/90">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-4 sm:gap-6 max-w-2xl">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="h-2 w-2 rounded-full bg-purple-600"></span>
            <span className="text-xs sm:text-sm">Design</span>
            <span className="h-2 w-2 rounded-full bg-red-500"></span>
            <span className="text-xs sm:text-sm">Innovation</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Turn Your Designs into Revenue and Recognition
          </h1>
          
          <p className="text-gray-600 text-base sm:text-lg">
            Showcase your portfolio, monetize your work, and connect with local clients—all with the power of AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Let's Get Started
            </button>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600">125M+ Total Designers</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-auto">
          <Image
            src="/hero-section/right.png"
            alt="Interior Design Showcase"
            width={700}
            height={500}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
