export default function Principles() {
  return (
    <section className="py-24 bg-white" id="principles">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-forest-green mb-4">
            The Principles of Sattvic Cooking
          </h2>
          <div className="w-24 h-1 bg-deep-saffron mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Purity in the kitchen leads to purity of the heart. Our cooking follows three
            fundamental pillars of Vedic wisdom.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Ahimsa */}
          <div className="sattvic-card text-center p-8 bg-spiritual-cream rounded-xl border border-gray-100">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="text-3xl">🌿</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-forest-green">Ahimsa (Non-Violence)</h3>
            <p className="text-gray-600 leading-relaxed">
              Purely vegetarian ingredients sourced with compassion, excluding meat, fish, and eggs.
            </p>
          </div>
          {/* Consciousness */}
          <div className="sattvic-card text-center p-8 bg-spiritual-cream rounded-xl border border-gray-100">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-forest-green">Consciousness</h3>
            <p className="text-gray-600 leading-relaxed">
              The state of mind while cooking affects the food. We cook with love, mindfulness, and
              devotion.
            </p>
          </div>
          {/* Prasadam */}
          <div className="sattvic-card text-center p-8 bg-spiritual-cream rounded-xl border border-gray-100">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="text-3xl">🙏</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-forest-green">Prasadam</h3>
            <p className="text-gray-600 leading-relaxed">
              Every dish is offered to the Divine first, transforming simple nourishment into
              spiritual mercy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
