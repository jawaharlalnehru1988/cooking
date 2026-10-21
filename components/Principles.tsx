import Link from "next/link";

const principles = [
  {
    id: 1,
    title: "Ahimsa (Non-Violence)",
    icon: "🌿",
    description:
      "Purely vegetarian ingredients sourced with compassion, excluding meat, fish, and eggs.",
  },
  {
    id: 3,
    title: "Consciousness",
    icon: "✨",
    description:
      "The state of mind while cooking affects the food. We cook with love, mindfulness, and devotion.",
  },
  {
    id: 4,
    title: "Prasadam",
    icon: "🙏",
    description:
      "Every dish is offered to the Divine first, transforming simple nourishment into spiritual mercy.",
  },
];

export default function Principles() {
  return (
    <section className="py-24 bg-spiritual-cream dark:bg-gray-950 transition-colors" id="principles">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-forest-green dark:text-forest-green mb-4">
            The Principles of Sattvic Cooking
          </h2>
          <div className="w-24 h-1 bg-deep-saffron mx-auto mb-6"></div>
          <p className="text-muted max-w-2xl mx-auto">
            Purity in the kitchen leads to purity of the heart. Our cooking follows three
            fundamental pillars of Vedic wisdom.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {principles.map((principle) => (
            <Link key={principle.id} href={`/principles/${principle.id}`} className="block group">
              <div className="sattvic-card p-6 md:p-7 bg-card-bg rounded-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:border-deep-saffron/40 flex flex-row items-center gap-5 md:gap-6">
                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-spiritual-cream dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform text-2xl md:text-3xl">
                  <span>{principle.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <h3 className="text-lg md:text-xl font-bold font-serif text-forest-green dark:text-forest-green group-hover:text-deep-saffron transition-colors">
                      {principle.title}
                    </h3>
                    <span className="text-deep-saffron text-sm font-semibold shrink-0 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Explore <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                  <p className="text-muted leading-relaxed text-sm md:text-base">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
