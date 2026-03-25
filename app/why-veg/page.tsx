import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { fetchCookingArticles } from "@/lib/cooking-api";

export default async function WhyVegPage() {
  // Fetch articles from the "Why Veg?" category
  const response = await fetchCookingArticles({ 
    mainTopic: "Why Veg?",
    pageSize: 50, // Get all 30 at once
    ordering: "order" // Sort by the order field we added during migration
  });

  const topics = response.results.map(article => {
    const firstParagraph = article.article.split("\n").find(line => line.trim().length > 40 && !line.startsWith("#"));
    return {
      id: article.id,
      order: article.order || 0,
      title: article.subTopic,
      description: firstParagraph 
        ? firstParagraph.slice(0, 150) + "..." 
        : "Deep dive into the scriptural and scientific reasons for a compassionate lifestyle."
    };
  }).sort((a, b) => (a.order) - (b.order));

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <header className="mb-20 text-center">
          <span className="text-forest-green font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Compassionate Living
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-deep-saffron mb-6">
            Why Veg Only? 
          </h1>
          <div className="w-24 h-1 bg-forest-green mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Addressing the 30 most common questions and challenges regarding a vegetarian lifestyle through science, scripture, and morality.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((t) => (
            <Link 
              key={`${t.id}-${t.order}`} 
              href={`/why-veg/${t.order}`}
              className="bg-spiritual-cream p-8 rounded-[2rem] border border-transparent hover:border-forest-green/20 hover:shadow-2xl transition-all group block"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-forest-green font-serif font-bold mb-6 group-hover:bg-forest-green group-hover:text-white transition-colors">
                {t.order}
              </div>
              <h2 className="text-xl font-bold text-forest-green mb-3 group-hover:text-deep-saffron transition-colors">
                {t.title}
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                {t.description}
              </p>
              <div className="mt-6 flex items-center text-xs font-bold text-forest-green uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                Discovery Article <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
