"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowUp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      <footer className="bg-gray-900 text-white pt-12 pb-6 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Company Info */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Bilal Hassan</h3>
              <p className="text-gray-400 mb-4">
                Building innovative solutions for modern businesses and individuals.
              </p>
              
            </div>

            {/* Quick Links */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/web/home" className="text-gray-400 hover:text-white transition-colors">
                   Home
                  </Link>
                </li>
                <li>
                  <Link href="/web/about" className="text-gray-400 hover:text-white transition-colors">
                   About us
                  </Link>
                </li>
                <li>
                  <Link href="/web/service" className="text-gray-400 hover:text-white transition-colors">
                     Services
                  </Link>
                </li>
                <li>
                  <Link href="/web/portfolio" className="text-gray-400 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/web/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
          {/* Personal Info Section */}
<div className="mb-6">
  <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Bilal Hassan</h4>
  <ul className="space-y-2 text-gray-400 text-sm">
    <li>
      🔗 <span className="text-white">GitHub:</span> 
      <Link href="https://github.com/globalbaba129?tab=repositories" className="text-purple-400 hover:underline ml-1" target="_blank">
        github.com/globalbaba129
      </Link>
    </li>
    <li>
      📌 Available for <span className="text-white">Remote Work</span> (Pakistan & Worldwide)
    </li>
    <li>
      📩 <span className="text-white">Email:</span> 
      <a href="mailto:bilal1259hassan@gmail.com" className="text-purple-400 hover:underline ml-1">
        bilal1259hassan@gmail.com
      </a>
    </li>
    <li>
      📞 <span className="text-white">Call/WhatsApp:</span> 
      <span className="ml-1">+92 335 459 4960 | +971 58 989 8635</span>
    </li>
    <li>
      🔗 <span className="text-white">LinkedIn:</span> 
      <Link href="https://linkedin.com/in/bilal-hassan-5717662b1" className="text-purple-400 hover:underline ml-1" target="_blank">
        linkedin.com/in/bilal-hassan-5717662b1
      </Link>
    </li>
  </ul>
</div>


            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 rounded text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Bilal Hassan Portfolio in NEXTJS. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;