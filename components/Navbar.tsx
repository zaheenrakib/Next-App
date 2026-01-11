"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Vision", href: "/vision" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 px-6 py-4 ${
        scrolled ? "top-2" : "top-0"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#0a1e2f]/80 backdrop-blur-lg border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-white"
          >
            Next<span className="text-cyan-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="https://github.com/zaheenrakib"
              target="_blank"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white"
            >
              <Github size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-white/5 bg-[#0a1e2f]/95 rounded-b-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="w-full py-3 bg-white text-black text-center font-bold rounded-xl active:scale-95 transition-transform"
            >
              Hire
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
