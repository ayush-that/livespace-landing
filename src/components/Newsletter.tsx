export default function Newsletter() {
  return (
    <section className="w-full py-32 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/80 via-purple-50/50 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-[2.75rem] font-medium leading-tight mb-6">
          Design Your Dream Space with{" "}
          <span className="text-[#FF8A9B]">LiveSpace</span> App
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay informed with the newest trends and updates in AI-powered interior design
          innovations. Subscribe today!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full sm:flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8A9B] placeholder:text-gray-400"
          />
          <button className="w-full sm:w-auto bg-[#FF8A9B] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#FF8A9B]/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
