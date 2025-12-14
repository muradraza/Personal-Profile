'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          YourBrand
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center md:space-x-8">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="#about" className="nav-link">About</Link>
        <Link href="#service" className="nav-link">Services</Link>
        <Link href="#projects" className="nav-link">Project</Link>
        <Link href="#blog" className="nav-link">Blog</Link>
        <Link href="#contact" className="nav-link">Contact</Link>
      </div>

      {/* CTA */}
      <div className="hidden md:block">
        <Link
          href="#contact"
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  </nav>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden border-t bg-white z-50">
      <div className="space-y-1 px-4 py-4">
        <Link href="#home" className="mobile-link">Home</Link>
        <Link href="#about" className="mobile-link">About</Link>
        <Link href="#service" className="mobile-link">Services</Link>
        <Link href="#projects" className="mobile-link">Project</Link>
        <Link href="#contact" className="mobile-link">Contact</Link>

        <Link
          href="/get-started"
          className="block mt-3 rounded-md bg-black px-4 py-2 text-center text-sm font-medium text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  )}
</header>

  );
};

export default Navbar;
