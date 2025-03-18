import Image from "next/image";

export default function PathwaySection() {
  return (
    <section className="w-full bg-gradient-to-br from-purple-50/50 to-transparent py-20">
      <div className="w-full max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#FF8A9B]" />
          <span className="text-gray-600">Non-Designer Pathway</span>
        </div>

        {/* Title */}
        <h2 className="text-[2.75rem] font-medium leading-tight mb-16">
          Designer or Explorer?
          <br />
          Start Your Journey <span className="text-[#FF8A9B]">Today</span>.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Designer Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-medium mb-4">Are You a Designer?</h3>
            <p className="text-gray-600 mb-6">
              Join today and showcase your talent to a global audience.
            </p>
            <Image
              src="/pathway/designer.jpg"
              alt="Designer workspace"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <button className="w-full bg-white text-black border border-gray-200 rounded-xl px-6 py-3 font-medium hover:border-[#FF8A9B] transition-colors">
              Sign Up as Designer
            </button>
          </div>

          {/* Design Ideas Card */}
          <div className="bg-[#FF8A9B] rounded-3xl p-8 text-white">
            <h3 className="text-xl font-medium mb-4">Looking for Design Ideas?</h3>
            <p className="mb-6">
              Discover unique designs. Transform spaces effortlessly with creative,
              tailored solutions and portfolios.
            </p>
            <button className="w-full bg-white text-[#FF8A9B] rounded-xl px-6 py-3 font-medium hover:bg-gray-50 transition-colors">
              Browse Designs
            </button>
          </div>

          {/* Preview Card */}
          <div className="relative bg-black rounded-3xl overflow-hidden">
            <Image
              src="/pathway/bottom.png"
              alt="Interior Design Preview"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M8 5v14l11-7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </div>
            {/* Expand Button */}
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M21 15l-9 9-9-9M21 9l-9-9-9 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
