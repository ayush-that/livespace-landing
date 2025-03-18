import Image from "next/image";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Using this digital payment bank has transformed how I manage my money. The app is intuitive, and transfers are instant!",
    name: "Chanuka Saranga",
    role: "Designer",
  },
  {
    quote: "I've tried many design apps, but Interior AI Generate is on a whole new level! This app makes it so easy to reimagine any room in my home. The AI suggestions are incredibly creative and feel like they're crafted by a professional designer!",
    name: "Hiran Amarjit",
    role: "Designer",
  },
  {
    quote: "I've tried many design apps, but Interior AI Generate is on a whole new level! This app makes it so easy to reimagine any room in my home. The AI suggestions are incredibly creative and feel like they're crafted by a professional designer!",
    name: "Chamuditha Jayood",
    role: "Designer",
  },
];

const Testimonial = ({ quote, name, role }: TestimonialProps) => (
  <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
    <div className="mb-6">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10 8L4 16H10V24H2V16L8 8H10ZM24 8L18 16H24V24H16V16L22 8H24Z" fill="#E5E7EB"/>
      </svg>
    </div>
    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{quote}</p>
    <div>
      <h4 className="font-medium">{name}</h4>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  </div>
);

export default function StorySection() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-purple-50/50 to-transparent overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6 ml-2">
              <div className="w-2 h-2 rounded-full bg-[#FF8A9B]" />
              <span className="text-gray-600">Success Stories</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-[2.75rem] font-medium leading-tight mb-10 sm:mb-14 ml-2">
              What Our Clients Have to
              <br className="hidden sm:block" />
              Say about <span className="text-[#FF8A9B]">Livespace</span>
            </h2>

            {/* Testimonials Grid */}
            <div className="flex flex-col gap-4 sm:gap-6 overflow-x-auto no-scrollbar
                          lg:flex-row lg:translate-x-8 lg:-mr-[32rem] lg:w-[200%]">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full lg:flex-1 lg:min-w-0">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0 lg:-ml-24">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/story/story.png"
                alt="Success Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
