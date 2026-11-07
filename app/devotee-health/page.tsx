import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { fetchCookingArticles } from "@/lib/cooking-api";

export const metadata = {
  title: "Health Care of Devotees: Spiritual, Ayurvedic & Practical Balance | Sattvic Cooking",
  description: "Comprehensive 30-part curriculum on devotee health care: Bhagavad-gita guidelines, Srila Prabhupada's instructions, Ayurvedic dietetics, sleep optimization, ergonomics, and natural remedies.",
};

export default async function DevoteeHealthPage() {
  const response = await fetchCookingArticles({
    mainTopic: "Health Care of Devotees",
    pageSize: 50,
    ordering: "order",
  });

  const topics = response.results
    .map((article) => {
      const firstParagraph = article.article
        .split("\n")
        .find((line) => line.trim().length > 40 && !line.startsWith("#") && !line.startsWith("*") && !line.startsWith(">"));
      return {
        id: article.id,
        order: article.order || 0,
        title: article.subTopic,
        description: firstParagraph
          ? firstParagraph.replace(/^[#*>\-\s]+/, "").slice(0, 160) + "..."
          : "Discover authentic scriptural and Ayurvedic insights for devotee health, vitality, and devotional service.",
      };
    })
    .sort((a, b) => a.order - b.order);

  return (
    <div className="bg-spiritual-cream dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-200 font-sans transition-colors">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <header className="mb-16 text-center max-w-4xl mx-auto">
          <span className="text-forest-green dark:text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Devotional Longevity &amp; Vitality
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-deep-saffron mb-6">
            Health Care of Devotees
          </h1>
          <div className="inline-block px-4 py-1.5 bg-amber-500/10 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            Spiritual • Ayurvedic • Ergonomic • Practical Balance
          </div>
          <div className="w-24 h-1 bg-deep-saffron mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
            The body is Krishna's sacred machine entrusted to us for divine service. Explore our comprehensive 30-part master curriculum integrating Lord Sri Krishna's instructions in Bhagavad-gita, Srila Prabhupada's timeless guidance, Charaka Samhita's dietary laws, circadian rest, and natural cures.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-left">
            <div className="p-4 bg-card-bg rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <span className="text-2xl block mb-1">📖</span>
              <h4 className="font-bold text-forest-green dark:text-emerald-400 text-sm">Bhagavad-gita</h4>
              <p className="text-xs text-muted">BG 6.16-17, 17.8-10, 15.14, &amp; 2.62-63 balance formulas</p>
            </div>
            <div className="p-4 bg-card-bg rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <span className="text-2xl block mb-1">🌿</span>
              <h4 className="font-bold text-forest-green dark:text-emerald-400 text-sm">Ayurvedic Ahara</h4>
              <p className="text-xs text-muted">Agni, Ama eradication, 50-25-25 stomach rule, and solar timings</p>
            </div>
            <div className="p-4 bg-card-bg rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <span className="text-2xl block mb-1">🌙</span>
              <h4 className="font-bold text-forest-green dark:text-emerald-400 text-sm">Circadian Rest</h4>
              <p className="text-xs text-muted">9:30 PM–3:30 AM goldmine, digital sunset, and Brahma-muhurta</p>
            </div>
            <div className="p-4 bg-card-bg rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <span className="text-2xl block mb-1">🪑</span>
              <h4 className="font-bold text-forest-green dark:text-emerald-400 text-sm">Ergonomics &amp; Cures</h4>
              <p className="text-xs text-muted">Spine preservation, desk setup, kitchen safety &amp; home pharmacy</p>
            </div>
          </div>
        </header>

        {topics.length === 0 ? (
          <div className="text-center py-20 bg-card-bg rounded-3xl border border-gray-100 dark:border-gray-800">
            <p className="text-muted text-lg">Health Care articles are loading from the sanctuary knowledge base...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((t) => (
              <Link
                key={`${t.id}-${t.order}`}
                href={`/devotee-health/${t.order}`}
                className="bg-card-bg p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 hover:border-deep-saffron/40 hover:shadow-2xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-spiritual-cream dark:bg-gray-800 flex items-center justify-center text-forest-green dark:text-emerald-400 font-serif font-bold group-hover:bg-deep-saffron group-hover:text-white transition-colors">
                      {t.order}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted group-hover:text-deep-saffron transition-colors">
                      Part #{t.order} of 30
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-forest-green dark:text-emerald-400 mb-3 group-hover:text-deep-saffron transition-colors leading-snug">
                    {t.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {t.description}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-deep-saffron uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Read Full Article <span className="ml-2 font-serif text-base">→</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
