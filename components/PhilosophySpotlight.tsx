import Link from "next/link";

export default function PhilosophySpotlight() {
  return (
    <section className="py-20 bg-card-bg/60 dark:bg-gray-900/40 border-y border-gray-100 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-deep-saffron font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
            Deepening Consciousness
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-forest-green dark:text-emerald-400 mb-4">
            Vedic Food Philosophy &amp; Inquiries
          </h2>
          <div className="w-20 h-1 bg-deep-saffron mx-auto mb-6"></div>
          <p className="text-muted text-base leading-relaxed">
            Krishna conscious cuisine is grounded in eternal Vedic shastra, Ayurvedic physiology, and pure devotion. Explore our in-depth knowledge libraries answering questions from neophytes and critics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Why No Onion & Garlic */}
          <Link
            href="/why-no-onion-garlic"
            className="group relative p-8 md:p-10 rounded-[2.5rem] bg-card-bg border border-gray-100 dark:border-gray-800 hover:border-deep-saffron/40 hover:shadow-2xl transition-all flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-deep-saffron/10 rounded-full translate-x-12 -translate-y-12 blur-xl"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 bg-deep-saffron/10 text-deep-saffron rounded-full text-xs font-bold uppercase tracking-wider">
                  28 Inquiries
                </span>
                <span className="text-3xl">🧄</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-forest-green dark:text-emerald-400 group-hover:text-deep-saffron transition-colors mb-4">
                Why No Onion &amp; Garlic?
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Understand the purāṇic origin of alliums, their tamasic &amp; rajasic impact on the mind, Ayurvedic distinctions between medicine and diet, modern brain-wave research, and how to cook royal gravies with hing.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-deep-saffron uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              Explore 28 Articles <span className="ml-2 font-serif text-base">→</span>
            </div>
          </Link>

          {/* Card 2: Why Veg Only? */}
          <Link
            href="/why-veg"
            className="group relative p-8 md:p-10 rounded-[2.5rem] bg-card-bg border border-gray-100 dark:border-gray-800 hover:border-forest-green/40 hover:shadow-2xl transition-all flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-forest-green/10 rounded-full translate-x-12 -translate-y-12 blur-xl"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 bg-forest-green/10 text-forest-green dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider">
                  30 Inquiries
                </span>
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-forest-green dark:text-emerald-400 group-hover:text-forest-green transition-colors mb-4">
                Why Veg Only?
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Resolving 30 common objections regarding the protein myth, plant consciousness, the food chain, ancestral hunting, physical stamina, and the spiritual law of karma.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-forest-green dark:text-emerald-400 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
              Explore 30 Articles <span className="ml-2 font-serif text-base">→</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
