import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { fetchCookingArticles, CookingArticle } from "@/lib/cooking-api";

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; mainTopic?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1");
  const currentTopic = params.mainTopic;

  const { results: recipes, count, next, previous } = await fetchCookingArticles({
    page: currentPage,
    pageSize: 12,
    mainTopic: currentTopic,
  });

  const totalPages = Math.ceil(count / 12);

  // Dynamically extract categories from the full list for accurate filtering
  // Fetching a larger set for category discovery (ideally there would be a separate endpoint)
  const { results: allForCategories } = await fetchCookingArticles({ pageSize: 500 });
  const categories = ["All", ...Array.from(new Set(allForCategories.map(r => r.mainTopic))).sort()];

  return (
    <div className="bg-spiritual-cream min-h-screen text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-forest-green mb-4">
            Sanctified Recipes
          </h1>
          <div className="w-24 h-1 bg-deep-saffron mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of Sattvik recipes, prepared with devotion and mindfulness.
            Nourish your body and soul with these ancient Vedic flavors.
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = (!currentTopic && cat === "All") || currentTopic === cat;
            return (
              <Link
                key={cat}
                href={cat === "All" ? "/recipes" : `/recipes?mainTopic=${encodeURIComponent(cat)}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  isActive
                    ? "bg-forest-green text-white border-forest-green shadow-md"
                    : "bg-white text-gray-600 border-gray-100 hover:border-deep-saffron/50 hover:text-deep-saffron"
                }`}
              >
                {cat}
              </Link>
            );
          })}
        </div>

        {recipes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {recipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                <article className="bg-white h-full rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-deep-saffron/30 transition-all cursor-pointer flex flex-col group">
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-deep-saffron uppercase mb-2 block opacity-70">
                      {recipe.mainTopic}
                    </span>
                    <h3 className="text-xl font-serif text-forest-green leading-tight group-hover:text-deep-saffron transition-colors">
                      {recipe.subTopic}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {recipe.article.replace(/[#*]/g, '').substring(0, 120)}...
                  </p>
                  <div className="flex items-center text-forest-green font-bold text-xs uppercase tracking-widest group-hover:text-deep-saffron transition-colors pt-4 border-t border-gray-50">
                    View Recipe
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-200">
            <p className="text-gray-500">No recipes found in this category. Check back soon!</p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <nav className="flex justify-center items-center gap-6 mt-8 pb-12">
            <Link
              href={`/recipes?page=${currentPage - 1}${currentTopic ? `&mainTopic=${encodeURIComponent(currentTopic)}` : ''}`}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full border border-forest-green/20 text-forest-green font-semibold hover:bg-forest-green hover:text-white transition-all ${
                !previous ? "pointer-events-none opacity-30" : ""
              }`}
            >
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Previous
            </Link>
            
            <div className="flex items-center px-4 py-2 bg-white rounded-lg border border-gray-100 shadow-sm">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mr-2">Page</span>
              <span className="text-forest-green font-serif text-lg">{currentPage}</span>
              <span className="text-gray-400 font-serif text-lg mx-2">/</span>
              <span className="text-gray-400 font-serif text-lg">{totalPages}</span>
            </div>

            <Link
              href={`/recipes?page=${currentPage + 1}${currentTopic ? `&mainTopic=${encodeURIComponent(currentTopic)}` : ''}`}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full border border-forest-green/20 text-forest-green font-semibold hover:bg-forest-green hover:text-white transition-all ${
                !next ? "pointer-events-none opacity-30" : ""
              }`}
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </nav>
        )}
      </main>
      <Footer />
    </div>
  );
}
