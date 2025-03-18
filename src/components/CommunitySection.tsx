import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="w-full relative py-20">
      <div className="absolute inset-0 w-full h-min">
        <Image
          src="/round/round.png"
          alt="Round Background"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
