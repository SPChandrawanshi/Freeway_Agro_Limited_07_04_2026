"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Environment", href: "/environment" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-[#1a1a1a]/95 backdrop-blur" 
        : "bg-[#1a1a1a]"
    }`}>
      <nav className="w-full h-[72px] lg:h-[80px] flex items-center justify-between px-4 sm:px-6 lg:px-12 bg-[#1a1a1a]">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 bg-transparent">
          <Image
            src="/logo.png"
            alt="Freeway Agro Limited"
            width={50}
            height={50}
            priority
            className="h-12 w-auto object-contain bg-transparent"
          />
        </Link>

          {/* Center: Desktop Menu */}
          <ul className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white transition hover:text-[#7cb342]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 lg:gap-3">
            <Link
              href="/book"
              className="hidden md:inline-flex rounded-md bg-[#2d8659] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#1b5a3f]"
            >
              🚜 Book Tractor
            </Link>

            <Link
              href="/contact"
              className="hidden lg:inline-flex rounded-md bg-[#2d8659] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#1b5a3f]"
            >
              Contact
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-[#2d8659]/20 lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="text-2xl font-bold">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="w-full bg-[#2d2d2d] px-4 sm:px-6 lg:px-12 pb-4 pt-3 shadow-sm lg:hidden">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href} className="text-center">
                <Link
                  href={link.href}
                  className="inline-block rounded-lg px-4 py-3 font-semibold text-white transition hover:bg-[#2d8659] hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2">
            <div className="flex flex-col gap-2">
              <Link
                href="/book"
                className="inline-block rounded-md bg-[#2d8659] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#1b5a3f] text-center"
                onClick={() => setIsOpen(false)}
              >
                🚜 Book Tractor
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-md bg-[#2d8659] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#1b5a3f] text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
