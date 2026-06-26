"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-navy/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            id="aaa-logo"
            href="#"
            className="text-2xl font-bold text-white aaa-logo logo-aaa"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            AAA
          </a>


          <div className="hidden md:flex items-center space-x-8">
            {["Portfolio", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-accent transition-colors duration-200 nav-item"
                data-aaa="nav-item"
              >
                {item}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-accent text-white font-semibold hover:bg-accent-hover transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(124,108,242,0.5)] nav-item resume-button"
              data-aaa="resume-button"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/10">
            {["Portfolio", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white hover:text-accent transition-colors duration-200 nav-item"
                data-aaa="nav-item"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              className="w-full px-6 py-2 rounded-full bg-accent text-white font-semibold hover:bg-accent-hover transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(124,108,242,0.5)] nav-item resume-button"
              data-aaa="resume-button"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        )}

      </div>
    </nav>
  );
}
