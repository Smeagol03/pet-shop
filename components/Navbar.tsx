"use client";
import React, { useState, useEffect } from "react";
import { Dog, Phone, Menu, X } from "lucide-react";
import { scrollToSection } from "../lib/utils";

const navLinks = [
  { name: "Beranda", id: "home" },
  { name: "Layanan", id: "services" },
  { name: "Produk", id: "products" },
  { name: "Tentang Kami", id: "about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(e, sectionId);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={(e) => handleNavClick(e, "home")}
          >
            <div className="bg-teal-500 p-2 rounded-lg text-white">
              <Dog size={24} />
            </div>
            <span
              className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-slate-900" : "text-slate-900 lg:text-slate-800"}`}
            >
              Paws<span className="text-teal-500">&</span>Tails
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`font-medium hover:text-teal-500 transition-colors ${
                  isScrolled ? "text-slate-600" : "text-slate-700"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-teal-500/30 flex items-center gap-2"
            >
              <Phone size={18} />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-teal-500 hover:bg-slate-50 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="w-full flex justify-center items-center gap-2 bg-teal-500 text-white px-5 py-3 rounded-xl font-medium"
              >
                <Phone size={18} />
                Booking Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
