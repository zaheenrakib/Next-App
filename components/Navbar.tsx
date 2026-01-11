"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Globe, PlayCircle } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  const languages = ["EN", "DE", "FR"];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled ? "top-4 px-6" : "top-0 px-0"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? "bg-[#0a1e2f]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl"
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-3">
          {/* 1. Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg group-hover:rotate-12 transition-transform">
              Z
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              ZAHEEN
            </span>
          </Link>

          {/* 2. Desktop Center Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#demo"
              className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <PlayCircle size={18} />
              Watch Demo
            </Link>
          </div>

          {/* 3. Desktop Right Side (Lang + Auth) */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
                <Globe size={14} className="text-cyan-400" />
                {lang}
                <ChevronDown size={14} />
              </button>
              {/* Dropdown menu */}
              <div className="absolute top-full right-0 mt-2 w-24 bg-[#0a1e2f] border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 shadow-xl">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="w-full text-left px-3 py-2 text-xs text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                  >
                    {l === "EN"
                      ? "English"
                      : l === "DE"
                      ? "Deutsch"
                      : "Français"}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-4 w-[1px] bg-white/10" />

            <Link
              href="/login"
              className="text-sm font-semibold text-gray-300 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-all active:scale-95 shadow-lg shadow-cyan-500/10"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 4. Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-8 bg-[#0a1e2f] border-t border-white/5 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/login"
                className="w-full py-4 text-center text-gray-400 font-bold border border-white/10 rounded-2xl"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="w-full py-4 text-center bg-cyan-400 text-black font-bold rounded-2xl"
              >
                Sign Up Free
              </Link>
            </div>
            {/* Language switch mobile */}
            <div className="flex justify-center gap-6 pt-4 border-t border-white/5">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-sm font-bold ${
                    lang === l ? "text-cyan-400" : "text-gray-500"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
