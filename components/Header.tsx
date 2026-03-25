"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Handle mounting to avoid hydration mismatch for icons
  useEffect(() => {
    setMounted(true);
  }, []);

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
    <header className="bg-spiritual-cream shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-colors">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 bg-deep-saffron rounded-full flex items-center justify-center shadow-sm">
            <span className="text-white text-xl">ॐ</span>
          </div>
          <span className="text-2xl font-serif font-bold text-forest-green dark:text-forest-green tracking-tight">
            Sattiv Cooking
          </span>
        </Link>

        {/* Navigation Links & Toggle */}
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex space-x-8 font-medium text-gray-600 dark:text-gray-300">
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

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
            aria-label="Toggle Theme"
          >
            {mounted && (
              theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden text-gray-600 dark:text-gray-400 focus:outline-none p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
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
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-spiritual-cream border-t border-gray-100 dark:border-gray-800 py-4 px-6 flex flex-col space-y-4 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors py-2 px-3 rounded-lg ${
                isActive(link.href)
                  ? "bg-spiritual-cream dark:bg-gray-900 text-deep-saffron"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
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
