import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { fetchCookingArticles } from "@/lib/cooking-api";

export const metadata = {
  title: "Why No Onion & Garlic? (Tamasic) | Sattvic Cooking",
  description: "Comprehensive scriptural proofs, Ayurvedic principles, neurological insights, and culinary solutions explaining why Vaishnavas abstain from onion and garlic.",
};

export default async function WhyNoOnionGarlicPage() {
  const response = await fetchCookingArticles({
    mainTopic: "Why No Onion & Garlic",
    pageSize: 50,
    ordering: "order",
  });

  const topics = response.results
    .map((article) => {
      const firstParagraph = article.article
        .split("\n")
        .find((line) => line.trim().length > 40 && !line.startsWith("#") && !line.startsWith("*"));
      return {
        id: article.id,
        order: article.order || 0,
        title: article.subTopic,
        description: firstParagraph
          ? firstParagraph.replace(/^[#*>\-\s]+/, "").slice(0, 160) + "..."
          : "Discover authentic scriptural and scientific insights on the spiritual impacts of alliums.",
      };
    })
    .sort((a, b) => a.order - b.order);

  return (
    <div className="bg-spiritual-cream dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-200 font-sans transition-colors">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <header className="mb-16 text-center max-w-4xl mx-auto">
          <span className="text-forest-green dark:text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Sattvik Diet &amp; Consciousness
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-deep-saffron mb-6">
            Why No Onion &amp; Garlic?
          </h1>
          <div className="inline-block px-4 py-1.5 bg-forest-green/10 dark:bg-emerald-950/40 text-forest-green dark:text-emerald-300 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            Tamasic &amp; Rajasic Nature of Alliums
          </div>
          <div className="w-24 h-1 bg-forest-green mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
            Addressing 28 foundational questions, scientific inquiries, and objections from neophytes and critics regarding the avoidance of onion, garlic, leeks, and mushrooms in Krishna consciousness.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-left">
            <div className="p-4 bg-card-bg rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <span className="text-2xl block mb-1">📜</span>
              <h4 className="font-bold text-forest-green dark:text-emerald-400 text-sm">Śabda-Pramāṇa</h4>
              <p className="text-xs text-muted">Bhagavad-gita, Manu-smriti, Puranas, &amp; Upanishads</p>
            </div>
            <div className="p-4 bg-card-bg rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <span className="text-2xl block mb-1">🧠</span>
              <h4 className="font-bold text-forest-green dark:text-emerald-400 text-sm">Neurobiology</h4>
              <p className="text-xs text-muted">Brain wave synchronization &amp; nervous equilibrium</p>
            </div>
            <div className="p-4 bg-card-bg rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <span className="text-2xl block mb-1">🌿</span>
              <h4 className="font-bold text-forest-green dark:text-emerald-400 text-sm">Ayurvedic Wisdom</h4>
              <p className="text-xs text-muted">Aushadha (medicine) vs. Ahāra (daily spiritual food)</p>
            </div>
            <div className="p-4 bg-card-bg rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <span className="text-2xl block mb-1">🍲</span>
              <h4 className="font-bold text-forest-green dark:text-emerald-400 text-sm">Culinary Art</h4>
              <p className="text-xs text-muted">Hing, ginger, cashew gravies &amp; temple secrets</p>
            </div>
          </div>
        </header>

        {topics.length === 0 ? (
          <div className="text-center py-20 bg-card-bg rounded-3xl border border-gray-100 dark:border-gray-800">
            <p className="text-muted text-lg">Articles are loading from the sanctuary knowledge base...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((t) => (
              <Link
                key={`${t.id}-${t.order}`}
                href={`/why-no-onion-garlic/${t.order}`}
                className="bg-card-bg p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 hover:border-deep-saffron/40 hover:shadow-2xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-spiritual-cream dark:bg-gray-800 flex items-center justify-center text-forest-green dark:text-emerald-400 font-serif font-bold group-hover:bg-deep-saffron group-hover:text-white transition-colors">
                      {t.order}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted group-hover:text-deep-saffron transition-colors">
                      Inquiry #{t.order}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-forest-green dark:text-emerald-400 mb-3 group-hover:text-deep-saffron transition-colors leading-snug">
                    {t.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                    {t.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center text-xs font-bold text-forest-green dark:text-emerald-400 uppercase tracking-widest opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  Read Full Treatise <span className="ml-2 font-serif text-base">→</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <section className="mt-24 p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-r from-forest-green/10 via-deep-saffron/10 to-forest-green/10 border border-deep-saffron/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-deep-saffron font-bold text-xs uppercase tracking-widest block mb-2">
              Next Step in Your Culinary Sadhana
            </span>
            <h3 className="text-3xl font-serif font-bold text-forest-green dark:text-white mb-4">
              Explore Pure Vegetarian Principles &amp; Recipes
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Dive into our 30 inquiries on compassionate living in &ldquo;Why Veg Only?&rdquo; or discover 200+ traditional sattvik temple recipes free of alliums and non-vegetarian ingredients.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/why-veg"
              className="px-6 py-3 bg-forest-green hover:bg-emerald-900 text-white rounded-xl font-bold text-sm transition-all shadow-md"
            >
              Why Veg Only? →
            </Link>
            <Link
              href="/recipes"
              className="px-6 py-3 bg-deep-saffron hover:bg-orange-600 text-white rounded-xl font-bold text-sm transition-all shadow-md"
            >
              Explore Recipes →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
