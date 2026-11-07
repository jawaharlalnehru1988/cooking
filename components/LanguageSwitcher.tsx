'use client';

import React, { useState, useEffect } from 'react';

export type Locale = 'en' | 'ta' | 'hi' | 'kn' | 'te' | 'ml' | 'bn';

interface LanguageOption {
  code: Locale;
  label: string;
  native: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'ml', label: 'Malayalam', native: 'മലയാളം' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
];

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // Read from cookie or query param if available
    const match = document.cookie.match(/(?:^|;\s*)askharekrishna-locale=([^;]+)/);
    if (match && match[1]) {
      const saved = match[1] as Locale;
      if (LANGUAGES.some(l => l.code === saved)) {
        setCurrentLocale(saved);
        return;
      }
    }
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang') as Locale;
    if (langParam && LANGUAGES.some(l => l.code === langParam)) {
      setCurrentLocale(langParam);
    }
  }, []);

  const switchLanguage = (nextLocale: Locale) => {
    if (isNavigating) return;
    if (nextLocale === currentLocale) return;
    setIsNavigating(true);

    // 1. Set persistent cookie matching askharekrishna.com ecosystem
    document.cookie = `askharekrishna-locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // 2. Update state & current URL with ?lang= parameter
    setCurrentLocale(nextLocale);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLocale);

    window.location.href = url.toString();
  };

  return (
    <div
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 text-xs font-bold transition-all ${
        isNavigating
          ? 'opacity-60 cursor-not-allowed bg-gray-50 dark:bg-gray-900'
          : 'hover:border-deep-saffron/40 bg-card-bg dark:bg-gray-900 shadow-sm'
      }`}
    >
      <span
        className={`material-symbols-outlined text-base text-deep-saffron ${
          isNavigating ? 'animate-spin' : ''
        }`}
      >
        {isNavigating ? 'progress_activity' : 'language'}
      </span>

      <select
        value={currentLocale}
        disabled={isNavigating}
        onChange={(e) => switchLanguage(e.target.value as Locale)}
        className="bg-transparent text-xs font-serif font-bold outline-none cursor-pointer text-gray-800 dark:text-gray-200"
        aria-label="Select website language"
      >
        {LANGUAGES.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-900 py-1"
          >
            {lang.native} ({lang.code.toUpperCase()})
          </option>
        ))}
      </select>
    </div>
  );
}
