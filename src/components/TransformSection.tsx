import Image from "next/image";

export default function TransformSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[2.75rem] font-medium leading-tight">
            Experience the
            <br />
            <span className="text-[#FF8A9B]">Transformation</span> View
            <br />
            Before & After
          </h2>
          
          <p className="text-gray-600 leading-relaxed max-w-xl">
            Unleash the power of transformation with our cutting-edge platform. Seamlessly compare 
            stunning 'before' and 'after' views in real-time, empowering you to visualize results 
            effortlessly. Experience the perfect blend of innovation and creativity, tailored to deliver 
            unparalleled satisfaction.
          </p>

          <div className="mt-4">
            <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-black/90 transition-colors">
              Let's Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-white">
          <Image
            src="/transform/right.png"
            alt="Before and After Transformation"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
          {/* Three Vertical Lines */}
          <div className="absolute inset-0 flex justify-between">
            <div className="w-[1px] h-full bg-white/80 mx-[33%]"></div>
            <div className="w-[1px] h-full bg-white/80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
