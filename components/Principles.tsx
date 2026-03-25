import Link from "next/link";

export default function Principles() {
  return (
    <section className="py-24 bg-spiritual-cream dark:bg-gray-950 transition-colors" id="principles">
      <div className="container mx-auto px-6">
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
        <div className="grid md:grid-cols-3 gap-12">
          <Link href="/principles/1" className="block group">
            <div className="sattvic-card text-center p-8 bg-card-bg rounded-xl border border-gray-100 dark:border-gray-800 transition-all hover:shadow-xl hover:border-deep-saffron/30 h-full">
              <div className="w-16 h-16 bg-spiritual-cream dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-forest-green dark:text-forest-green group-hover:text-deep-saffron transition-colors">Ahimsa (Non-Violence)</h3>
              <p className="text-muted leading-relaxed">
                Purely vegetarian ingredients sourced with compassion, excluding meat, fish, and eggs.
              </p>
            </div>
          </Link>

          <Link href="/principles/3" className="block group">
            <div className="sattvic-card text-center p-8 bg-card-bg rounded-xl border border-gray-100 dark:border-gray-800 transition-all hover:shadow-xl hover:border-deep-saffron/30 h-full">
              <div className="w-16 h-16 bg-spiritual-cream dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-forest-green dark:text-forest-green group-hover:text-deep-saffron transition-colors">Consciousness</h3>
              <p className="text-muted leading-relaxed">
                The state of mind while cooking affects the food. We cook with love, mindfulness, and
                devotion.
              </p>
            </div>
          </Link>

          <Link href="/principles/4" className="block group">
            <div className="sattvic-card text-center p-8 bg-card-bg rounded-xl border border-gray-100 dark:border-gray-800 transition-all hover:shadow-xl hover:border-deep-saffron/30 h-full">
              <div className="w-16 h-16 bg-spiritual-cream dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <span className="text-3xl">🙏</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-forest-green dark:text-forest-green group-hover:text-deep-saffron transition-colors">Prasadam</h3>
              <p className="text-muted leading-relaxed">
                Every dish is offered to the Divine first, transforming simple nourishment into
                spiritual mercy.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
