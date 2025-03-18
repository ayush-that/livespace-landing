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

        {/* Full Width Image */}
        <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden">
          <Image
            src="/pathway/bottom.png"
            alt="Interior Design Preview"
            width={1200}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
