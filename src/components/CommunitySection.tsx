import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="w-full relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/round/round.png"
          alt="Round Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-8">
        {/* Content */}
        <div className="flex flex-col items-center mt-32">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-[2.75rem] font-medium leading-tight">
              Community Stands
              <br />
              For You.
            </h2>
          </div>

          {/* Bottom Image */}
          <div className="relative">
            <Image
              src="/round/bottom.png"
              alt="Community Members"
              width={600}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
