"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Expertise", href: "#expertise" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-white tracking-tight">Sarah Iniobong <span className="text-indigo-400">Uko</span></a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#resume" className="px-5 py-2.5 rounded-full bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-colors">
            Contact Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white font-medium py-2">
              {link.name}
            </a>
          ))}
          <a href="#resume" className="w-full text-center py-3 rounded-xl bg-white text-zinc-950 font-semibold mt-2">
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}
