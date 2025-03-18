import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-8 sm:mx-12 lg:mx-20 mb-8">
      <footer className="bg-[#1E1E1E] text-white rounded-[32px]">
        <div className="w-full max-w-7xl mx-auto p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-medium">
                Design Your Dream Space with
                <br />
                LiveSpace App
              </h2>
              <p className="text-gray-400">
                Stay updated on features and opportunities. Subscribe to our newsletter.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="bg-[#2C2C2C] rounded-xl px-4 py-3 flex-grow max-w-xs text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF8A9B]"
                />
                <button className="bg-[#FF8A9B] text-white px-6 py-3 rounded-xl hover:bg-[#FF8A9B]/90 transition-colors">
                  Contact us
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="font-medium mb-6">Contact Us</h3>
                <p className="text-gray-400">+1 (999) 888-77-66</p>
                <p className="text-gray-400">hello@LIVESPACE.com</p>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="font-medium mb-6">Location</h3>
                <p className="text-gray-400">
                  483020, Dubai,
                  <br />
                  Dubai 29/2/5, Office 4
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-16 pt-8 border-t border-gray-800">
            {/* Logo */}
            <Image
              src="/footer/logo.svg"
              alt="LiveSpace Logo"
              width={140}
              height={32}
              className="h-8 w-auto"
            />

            {/* Navigation */}
            <div className="flex items-center gap-8">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 mr-2">Socials</span>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
