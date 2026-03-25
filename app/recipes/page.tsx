import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { fetchCookingArticles, fetchCookingCategories, CookingArticle } from "@/lib/cooking-api";

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; mainTopic?: string; category?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1");
  const currentTopic = params.category || params.mainTopic;

  const { results: recipes, count, next, previous } = await fetchCookingArticles({
    page: currentPage,
    pageSize: 12,
    category: params.category,
    mainTopic: params.mainTopic,
  });

  const totalPages = Math.ceil(count / 12);

  // Use the new dedicated endpoint for categories
  const { categories: fetchedCategories } = await fetchCookingCategories();
  const categories = ["All", ...fetchedCategories];

  return (
    <div className="bg-spiritual-cream dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-200 font-sans transition-colors">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-forest-green dark:text-forest-green mb-4">
            Sanctified Recipes
          </h1>
          <div className="w-24 h-1 bg-deep-saffron mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                href={cat === "All" ? "/recipes" : `/recipes?category=${encodeURIComponent(cat)}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  isActive
                    ? "bg-forest-green text-white border-forest-green shadow-md"
                    : "bg-card-bg text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-800 hover:border-deep-saffron/50 hover:text-deep-saffron"
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
                <article className="bg-card-bg h-full rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-deep-saffron/30 transition-all cursor-pointer flex flex-col group">
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-deep-saffron uppercase mb-2 block opacity-70">
                      {recipe.mainTopic}
                    </span>
                    <h3 className="text-xl font-serif text-forest-green dark:text-forest-green leading-tight group-hover:text-deep-saffron transition-colors">
                      {recipe.subTopic}
                    </h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {recipe.article.replace(/[#*]/g, '').substring(0, 120)}...
                  </p>
                  <div className="flex items-center text-forest-green dark:text-forest-green font-bold text-xs uppercase tracking-widest group-hover:text-deep-saffron transition-colors pt-4 border-t border-gray-50 dark:border-gray-800">
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
          <div className="text-center py-20 bg-card-bg rounded-2xl shadow-sm border border-dashed border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400">No recipes found in this category. Check back soon!</p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <nav className="flex justify-center items-center gap-6 mt-8 pb-12">
            <Link
              href={`/recipes?page=${currentPage - 1}${params.category ? `&category=${encodeURIComponent(params.category)}` : params.mainTopic ? `&mainTopic=${encodeURIComponent(params.mainTopic)}` : ""}`}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full border border-forest-green/20 dark:border-forest-green/40 text-forest-green dark:text-forest-green font-semibold hover:bg-forest-green hover:text-white transition-all ${
                !previous ? "pointer-events-none opacity-30" : ""
              }`}
            >
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Previous
            </Link>
            
            <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm">
              <span className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest mr-2">Page</span>
              <span className="text-forest-green dark:text-forest-green font-serif text-lg">{currentPage}</span>
              <span className="text-gray-400 font-serif text-lg mx-2">/</span>
              <span className="text-gray-400 font-serif text-lg">{totalPages}</span>
            </div>

            <Link
              href={`/recipes?page=${currentPage + 1}${params.category ? `&category=${encodeURIComponent(params.category)}` : params.mainTopic ? `&mainTopic=${encodeURIComponent(params.mainTopic)}` : ""}`}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full border border-forest-green/20 dark:border-forest-green/40 text-forest-green dark:text-forest-green font-semibold hover:bg-forest-green hover:text-white transition-all ${
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
