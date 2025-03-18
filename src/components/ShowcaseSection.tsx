'use client';

import { useState } from 'react';

export default function ShowcaseSection() {
  const [openSection, setOpenSection] = useState<string>('upload');

  return (
    <section className="w-full bg-gradient-to-br from-purple-50/50 to-transparent py-20">
      <div className="w-full max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF8A9B]" />
              <span className="text-gray-600">How It Works</span>
            </div>

            <h2 className="text-[2.75rem] font-medium leading-tight">
              Showcase Your Talent,
              <br />
              Monetize Your <span className="text-[#FF8A9B]">Designs</span>
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              Experience the future of interior design without spending a dime. Our AI-powered platform is
              completely free, offering unlimited access to innovative tools, stunning designs, and seamless
              solutions for everyone. Start creating today!
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-black/90 transition-colors">
              Start Now - It's Free
            </button>
          </div>

          {/* Right Content - FAQ Style */}
          <div className="space-y-4">
            {/* About Sign Up */}
            <div className="bg-white rounded-2xl">
              <button 
                className="w-full px-6 py-4 flex items-center justify-between"
                onClick={() => setOpenSection(openSection === 'signup' ? '' : 'signup')}
              >
                <span className="font-medium">About Sign Up</span>
                <span className="text-[#FF8A9B] text-2xl">{openSection === 'signup' ? '×' : '+'}</span>
              </button>
              {openSection === 'signup' && (
                <div className="px-6 pb-4 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A9B]" />
                    <span>Sign Up or Log In Easily Anytime</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A9B]" />
                    <span>Add Room Details and Style Preferences Effortlessly</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A9B]" />
                    <span>AI Generates Tailored Designs Instantly for You</span>
                  </div>
                </div>
              )}
            </div>

            {/* About Upload Designs */}
            <div className="bg-white rounded-2xl">
              <button 
                className="w-full px-6 py-4 flex items-center justify-between"
                onClick={() => setOpenSection(openSection === 'upload' ? '' : 'upload')}
              >
                <span className="font-medium">About Upload Designs</span>
                <span className="text-[#FF8A9B] text-2xl">{openSection === 'upload' ? '×' : '+'}</span>
              </button>
              {openSection === 'upload' && (
                <div className="px-6 pb-4 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A9B]" />
                    <span>Preview Stunning Before and After Visualizations in Seconds</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A9B]" />
                    <span>Refine Designs to Match Your Unique Vision</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A9B]" />
                    <span>Enjoy Livespace with 100% free subscription</span>
                  </div>
                </div>
              )}
            </div>

            {/* Monetize */}
            <div className="bg-white rounded-2xl">
              <button 
                className="w-full px-6 py-4 flex items-center justify-between"
                onClick={() => setOpenSection(openSection === 'monetize' ? '' : 'monetize')}
              >
                <span className="font-medium">Monetize</span>
                <span className="text-[#FF8A9B] text-2xl">{openSection === 'monetize' ? '×' : '+'}</span>
              </button>
              {openSection === 'monetize' && (
                <div className="px-6 pb-4 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A9B]" />
                    <span>Get Paid for Your Work</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A9B]" />
                    <span>Get Rewarded for Your Designs</span>
                  </div>
                </div>
              )}
            </div>

            {/* Engage Clients */}
            <div className="bg-white rounded-2xl">
              <button 
                className="w-full px-6 py-4 flex items-center justify-between"
                onClick={() => setOpenSection(openSection === 'engage' ? '' : 'engage')}
              >
                <span className="font-medium">Engage Clients</span>
                <span className="text-[#FF8A9B] text-2xl">{openSection === 'engage' ? '×' : '+'}</span>
              </button>
              {openSection === 'engage' && (
                <div className="px-6 pb-4 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A9B]" />
                    <span>Collaborate with Your Clients</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A9B]" />
                    <span>Engage Your Clients with Interactive Designs</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
