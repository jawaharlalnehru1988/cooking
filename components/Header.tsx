"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

interface NavCategory {
  heading: string;
  items: {
    name: string;
    href: string;
    description: string;
    icon: string;
    badge?: string;
  }[];
}

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close drawer whenever route changes
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navCategories: NavCategory[] = [
    {
      heading: "Culinary Core",
      items: [
        {
          name: "Home",
          href: "/",
          description: "Sattvic recipes, culinary inspiration & daily Vedic guidelines",
          icon: "🏠",
        },
        {
          name: "All Recipes",
          href: "/recipes",
          description: "Royal sabjis, sambars, rasams, sweets, breads & prasadam feasts",
          icon: "🍲",
          badge: "Curated",
        },
        {
          name: "Ingredients Directory",
          href: "/ingredients",
          description: "Pure spices, grains, A2 dairy, and alternatives to alliums",
          icon: "🌿",
        },
      ],
    },
    {
      heading: "Philosophy & Health Care",
      items: [
        {
          name: "Health Care of Devotees",
          href: "/devotee-health",
          description: "30 comprehensive inquiries: BG formulas, Ahara, sleep, ergonomics & cures",
          icon: "🧘‍♂️",
          badge: "30 Parts",
        },
        {
          name: "Principles of Cooking",
          href: "/principles",
          description: "Offering to Krishna, kitchen purity (saucam), and spiritual consciousness",
          icon: "🪔",
        },
        {
          name: "Why No Onion & Garlic?",
          href: "/why-no-onion-garlic",
          description: "28 scriptural, Ayurvedic & neurological proofs against alliums",
          icon: "🧄",
          badge: "28 Inquiries",
        },
        {
          name: "Why Veg Only?",
          href: "/why-veg",
          description: "30 inquiries resolving protein myths, karma & spiritual ethics",
          icon: "🌱",
          badge: "30 Inquiries",
        },
      ],
    },
    {
      heading: "About Sanctuary",
      items: [
        {
          name: "About Sattvic Cooking",
          href: "/about",
          description: "Our transcendental mission, lineage, and devotional standards",
          icon: "📜",
        },
      ],
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <header className="bg-spiritual-cream dark:bg-gray-950 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-40 transition-colors">
        <nav className="container mx-auto px-6 py-3.5 flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 bg-deep-saffron rounded-full flex items-center justify-center shadow-sm">
              <span className="text-white text-xl">ॐ</span>
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-forest-green dark:text-emerald-400 tracking-tight block leading-tight">
                Sattvik Cooking
              </span>
              <span className="text-[10px] text-muted uppercase tracking-widest block font-medium">
                Ask Hare Krishna Sanctuary
              </span>
            </div>
          </Link>

          {/* Clean Right Actions: Theme Toggle + Master Hamburger Button */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              aria-label="Toggle Theme"
              title="Toggle Light / Dark Mode"
            >
              {mounted && (
                theme === "dark" ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )
              )}
            </button>

            {/* Master Hamburger Menu Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-2 bg-forest-green hover:bg-forest-green/90 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-4 py-2 rounded-full font-medium text-sm transition-all shadow-sm group"
              aria-label="Open Navigation Menu"
            >
              <div className="flex flex-col gap-1 w-4 justify-center items-center">
                <span className="w-4 h-0.5 bg-white rounded-full group-hover:bg-amber-200 transition-colors"></span>
                <span className="w-4 h-0.5 bg-white rounded-full group-hover:bg-amber-200 transition-colors"></span>
                <span className="w-4 h-0.5 bg-white rounded-full group-hover:bg-amber-200 transition-colors"></span>
              </div>
              <span className="font-serif tracking-wide font-bold">Topics Menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Full-Featured Slide-Over Navigation Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[460px] bg-spiritual-cream dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Main Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-card-bg/80 dark:bg-gray-900/80 backdrop-blur">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-deep-saffron rounded-full flex items-center justify-center text-white font-serif text-lg">
              ॐ
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-forest-green dark:text-emerald-400">
                Explore Sattvic Library
              </h2>
              <p className="text-[11px] text-muted">All topics, philosophy &amp; recipes</p>
            </div>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Close Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Body - Categorized Links */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin">
          {navCategories.map((cat) => (
            <div key={cat.heading} className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-deep-saffron dark:text-amber-400 block px-1">
                {cat.heading}
              </span>
              <div className="space-y-2">
                {cat.items.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsDrawerOpen(false)}
                      className={`flex items-start gap-4 p-3.5 rounded-2xl border transition-all group ${
                        active
                          ? "bg-deep-saffron/10 border-deep-saffron/40 dark:bg-amber-950/40 dark:border-amber-500/40 shadow-sm"
                          : "bg-card-bg dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-deep-saffron/30 hover:shadow-md"
                      }`}
                    >
                      <span className="text-2xl mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3
                            className={`font-serif font-bold text-sm leading-snug group-hover:text-deep-saffron transition-colors ${
                              active
                                ? "text-deep-saffron dark:text-amber-400"
                                : "text-forest-green dark:text-emerald-400"
                            }`}
                          >
                            {item.name}
                          </h3>
                          {item.badge && (
                            <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-deep-saffron/15 text-deep-saffron dark:bg-amber-500/20 dark:text-amber-300">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <span
                        className={`text-sm shrink-0 self-center text-muted group-hover:text-deep-saffron group-hover:translate-x-1 transition-all ${
                          active ? "text-deep-saffron" : ""
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="p-5 border-t border-gray-100 dark:border-gray-800 bg-card-bg/60 dark:bg-gray-900/60 text-center">
          <p className="text-xs text-muted leading-relaxed">
            Hare Krishna • Cooking as an offering of unalloyed devotion
          </p>
          <div className="mt-2 text-[11px] text-deep-saffron font-medium">
            cooking.askharekrishna.com
          </div>
        </div>
      </aside>
    </>
  );
}
