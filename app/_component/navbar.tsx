"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
       <Link href="/" className="text-2xl font-bold text-gray-800">
  <div className="relative w-12 h-12"> {/* Adjust width and height as needed */}
    <Image
      src="https://c7.alamy.com/comp/HH5BDW/nike-pitch-football-on-white-background-nike-inc-is-an-american-multinational-HH5BDW.jpg"
      alt="Company Logo"
      fill
      className="object-contain"
      sizes="(max-width: 768px) 50px, 50px"
      priority
    />
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/web/about" className="text-gray-800 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/web/service" className="text-gray-800 hover:text-purple-600 transition-colors">
              Services
            </Link>
             <Link href="/web/skills" className="text-gray-800 hover:text-purple-600 transition-colors">
            My Skills
            </Link>
            <Link href="/web/portfolio" className="text-gray-800 hover:text-purple-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/web/contact" className="text-gray-800 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-4 pb-6 space-y-4">
            <Link 
              href="/" 
              className="block py-2 text-gray-800 hover:text-purple-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-gray-800 hover:text-purple-600 transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block py-2 text-gray-800 hover:text-purple-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className="block py-2 text-gray-800 hover:text-purple-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-gray-800 hover:text-purple-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;