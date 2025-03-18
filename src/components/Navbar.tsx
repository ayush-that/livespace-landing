"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-10 mt-4">
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/hero-section/logo.svg"
                alt="Livespace Logo"
                width={150}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-gray-600 hover:text-black transition duration-150"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-black transition duration-150"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-black transition duration-150"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-black transition duration-150"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-600 hover:text-black focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Close icon
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-full left-0 right-0 bg-white shadow-md`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50"
          >
            FAQ
          </Link>
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
