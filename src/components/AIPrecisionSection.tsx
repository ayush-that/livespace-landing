import Image from "next/image";

const testimonials = [
  { id: 1, image: "/ai/avatar1.png" },
  { id: 2, image: "/ai/avatar2.png" },
  { id: 3, image: "/ai/avatar3.png" },
  { id: 4, image: "/ai/avatar4.png" },
  { id: 5, image: "/ai/avatar5.png" },
  { id: 6, image: "/ai/avatar6.png" },
  { id: 7, image: "/ai/avatar7.png" },
  { id: 8, image: "/ai/avatar8.png" },
  { id: 9, image: "/ai/avatar9.png" },
];

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

            {/* Testimonial Avatars */}
            <div className="flex -space-x-3 overflow-hidden">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="inline-block h-12 w-12 rounded-full ring-4 ring-[#1E1E1E]"
                >
                  <Image
                    src={testimonial.image}
                    alt={`User ${testimonial.id}`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
