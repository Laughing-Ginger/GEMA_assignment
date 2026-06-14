import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Details", href: "#details" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "FAQ", href: "#faq" },
  { label: "Register", href: "#register" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/95 text-slate-900 shadow-lg"
          : "border-white/10 bg-slate-950/80 text-white shadow-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          className={`text-lg font-semibold tracking-[0.2em] uppercase transition-colors ${
            scrolled ? "text-slate-900 hover:text-indigo-600" : "text-white hover:text-indigo-200"
          }`}
        >
          Kidrove
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-indigo-500 ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-xl transition-all ${
            scrolled
              ? "text-slate-800 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? scrolled
              ? "max-h-64 border-t border-slate-100 py-4"
              : "max-h-64 border-t border-white/10 py-4"
            : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3.5 px-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-semibold transition-colors hover:text-indigo-500 ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
