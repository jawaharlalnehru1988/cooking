"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipes" },
    { name: "Principles", href: "/principles" },
    { name: "Why Veg?", href: "/why-veg" },
    { name: "Ingredients", href: "/ingredients" },
    { name: "About", href: "/about" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 bg-deep-saffron rounded-full flex items-center justify-center shadow-sm">
            <span className="text-white text-xl">ॐ</span>
          </div>
          <span className="text-2xl font-serif font-bold text-forest-green tracking-tight">
            Sattiv Cooking
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-deep-saffron transition-all py-1 border-b-2 ${
                isActive(link.href)
                  ? "text-deep-saffron border-deep-saffron"
                  : "border-transparent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-gray-600 focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m12 6H4"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 flex flex-col space-y-4 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors py-2 px-3 rounded-lg ${
                isActive(link.href)
                  ? "bg-spiritual-cream text-deep-saffron"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
