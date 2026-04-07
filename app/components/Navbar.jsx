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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/70 backdrop-blur" 
        : "bg-transparent"
    }`}>
      <div className="w-full px-4 pt-3 sm:px-6 lg:px-12">
        <nav className="mx-auto grid h-[72px] max-w-6xl grid-cols-[auto_1fr_auto] items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm lg:h-[88px] lg:px-6">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center rounded-xl bg-white px-2 py-1 shadow-sm ring-1 ring-slate-100">
              <div className="h-14 sm:h-16 lg:h-[72px]">
                <Image
                  src="/logo.png"
                  alt="Freeway Agro Limited"
                  width={568}
                  height={572}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Center: Desktop Menu */}
          <ul className="hidden lg:flex items-center justify-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium tracking-[0.01em] text-slate-700 transition hover:text-[var(--primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex rounded-md bg-[var(--primary)] px-5 py-2.5 text-sm font-medium tracking-[0.01em] text-white transition hover:opacity-90"
            >
              Contact Us
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[var(--primary)] transition-colors hover:bg-slate-100 lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="text-2xl font-bold">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mounted && isOpen && (
          <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-200 bg-white px-3 pb-4 pt-3 shadow-sm lg:hidden">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href} className="text-center">
                  <Link
                    href={link.href}
                    className="inline-block rounded-lg px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[var(--primary)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 text-right">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-[var(--primary)] px-6 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
