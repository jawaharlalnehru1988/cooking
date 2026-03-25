import Link from "next/link";
import { fetchCookingCategories } from "@/lib/cooking-api";

export default async function CategorySection() {
  const { categories } = await fetchCookingCategories();

  // Vibrant, harmonious hover styles for category cards
  const hoverStyles = [
    "hover:border-orange-200 hover:bg-orange-50/50",
    "hover:border-green-200 hover:bg-green-50/50",
    "hover:border-amber-200 hover:bg-amber-50/50",
    "hover:border-emerald-200 hover:bg-emerald-50/50",
    "hover:border-rose-200 hover:bg-rose-50/50",
    "hover:border-indigo-200 hover:bg-indigo-50/50",
    "hover:border-teal-200 hover:bg-teal-50/50",
    "hover:border-vedic-gold/30 hover:bg-vedic-gold/5",
  ];

  if (!categories || categories.length === 0) return null;

  return (
    <section className="py-24 bg-spiritual-cream/50 dark:bg-gray-950 transition-colors relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient dark:opacity-90 dark:bg-black/40"></div>
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <span className="text-deep-saffron font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
          Divine Wisdom
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-forest-green dark:text-forest-green mb-6">
          Browse by Category
        </h2>
        <div className="w-24 h-1.5 bg-deep-saffron mx-auto mb-16"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.slice(0, 8).map((category, index) => (
            <Link
              key={category}
              href={`/recipes?category=${encodeURIComponent(category)}`}
              className={`group relative flex flex-col items-center p-10 bg-card-bg rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2 ${
                hoverStyles[index % hoverStyles.length]
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-spiritual-cream dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <svg
                  className="w-8 h-8 text-forest-green opacity-70 group-hover:text-deep-saffron transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-forest-green dark:text-forest-green group-hover:text-deep-saffron transition-colors mb-2">
                {category}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Explore sacred {category.toLowerCase()} principles and recipes for higher
                consciousness.
              </p>

              <div className="mt-8 flex items-center text-[10px] font-bold tracking-widest uppercase text-muted group-hover:text-forest-green transition-colors">
                View Collection
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
