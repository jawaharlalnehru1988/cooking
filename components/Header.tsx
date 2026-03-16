"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <a href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 bg-deep-saffron rounded-full flex items-center justify-center">
            <span className="text-white text-xl">ॐ</span>
          </div>
          <span className="text-2xl font-serif font-bold text-forest-green tracking-tight">
            Ananda Rasa
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
          <a
            className="hover:text-deep-saffron transition-colors border-b-2 border-deep-saffron"
            href="/"
          >
            Home
          </a>
          <a className="hover:text-deep-saffron transition-colors" href="/recipes">
            Recipes
          </a>
          <a className="hover:text-deep-saffron transition-colors" href="#">
            Principles
          </a>
          <a className="hover:text-deep-saffron transition-colors" href="#">
            Ingredients
          </a>
          <a className="hover:text-deep-saffron transition-colors" href="#">
            About
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-gray-600 focus:outline-none"
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
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 flex flex-col space-y-4 font-medium text-gray-600">
          <a
            className="text-deep-saffron transition-colors"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a className="hover:text-deep-saffron transition-colors" href="#" onClick={() => setIsMenuOpen(false)}>
            Recipes
          </a>
          <a className="hover:text-deep-saffron transition-colors" href="#" onClick={() => setIsMenuOpen(false)}>
            Principles
          </a>
          <a className="hover:text-deep-saffron transition-colors" href="#" onClick={() => setIsMenuOpen(false)}>
            Ingredients
          </a>
          <a className="hover:text-deep-saffron transition-colors" href="#" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
        </div>
      )}
    </header>
  );
}
