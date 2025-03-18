import Image from "next/image";



export default function AIPrecisionSection() {
  return (
    <section className="w-full bg-[#1E1E1E] py-20">
      <div className="w-full max-w-7xl mx-auto px-8">
        {/* Map Image */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <Image
            src="/ai/map.png"
            alt="World Map with Connections"
            width={900}
            height={600}
            className="w-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-[2.75rem] font-medium leading-tight text-white">
              Revolutionize Interiors With
              <br />
              <span className="text-[#FF8A9B]">AI Precision</span>
            </h2>
            
            <p className="text-gray-400 leading-relaxed">
              Discover AI-powered interior design that transforms spaces
              effortlessly. Get stunning, customized designs tailored to your
              style.
            </p>

            <div className="h-px bg-gray-800 w-24" />

            <p className="text-gray-400 leading-relaxed">
              Take control, customize, and transform your interiors
              effortlessly with AI-powered design.
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-xl font-medium mb-4">
                Be the Boss of Your Space
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Take control of your interiors with AI-powered design. Customize,
                visualize, and transform your space effortlessly. Your style, your
                rules—design like a pro with cutting-edge AI!
              </p>

              <p className="text-gray-400 leading-relaxed">
                Design your dream space with AI-powered precision. Customize
                every detail, visualize instantly, and make it truly yours. With
                LiveSpace, you call the shots in your own space!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
