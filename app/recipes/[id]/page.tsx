import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchCookingArticleById, fetchCookingArticles } from "@/lib/cooking-api";
import PrintButton from "@/components/PrintButton";

export default async function RecipeDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const currentId = parseInt(id);
  
  // 1. Fetch current recipe
  let recipe;
  try {
    recipe = await fetchCookingArticleById(id);
  } catch (error) {
    console.error("Error fetching recipe:", error);
    notFound();
  }

  if (!recipe) {
    notFound();
  }

  // 2. Fetch all recipes to find neighbors (cached)
  const { results: allRecipes } = await fetchCookingArticles({ pageSize: 1200 }); // Large enough to cover current database
  const currentIndex = allRecipes.findIndex(r => r.id === currentId);
  const previousRecipe = currentIndex > 0 ? allRecipes[currentIndex - 1] : null;
  const nextRecipe = currentIndex < allRecipes.length - 1 ? allRecipes[currentIndex + 1] : null;

  return (
    <div className="bg-spiritual-cream min-h-screen text-gray-800 font-sans pb-20">
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <Link 
          href="/recipes" 
          className="inline-flex items-center text-forest-green hover:text-deep-saffron transition-colors mb-8 font-semibold group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to recipes
        </Link>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="bg-forest-green text-white p-10 md:p-16 text-center">
            <span className="text-vedic-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block opacity-80">
              {recipe.mainTopic}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight">
              {recipe.subTopic}
            </h1>
            <div className="w-20 h-1 bg-deep-saffron mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="p-8 md:p-16 bg-white">
            <div className="prose prose-lg prose-forest max-w-none 
              prose-headings:font-serif prose-headings:text-forest-green 
              prose-h3:text-deep-saffron prose-h3:border-b prose-h3:border-vedic-gold/20 prose-h3:pb-2
              prose-strong:text-forest-green prose-strong:font-bold
              prose-li:marker:text-deep-saffron
              prose-blockquote:border-deep-saffron prose-blockquote:bg-spiritual-cream/50 prose-blockquote:py-1
            ">
              <ReactMarkdown>{recipe.article}</ReactMarkdown>
            </div>
          </div>

          <div className="bg-gray-50 border-t border-gray-100 p-8 md:p-10 flex flex-wrap justify-between items-center gap-6">
            <div className="text-gray-400 text-sm italic">
              Published on {new Date(recipe.created_at).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            
            <PrintButton />
          </div>
        </article>

        {/* Previous / Next Navigation */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-forest-green/10">
          <div className="flex flex-col">
            {previousRecipe && (
              <Link
                href={`/recipes/${previousRecipe.id}`}
                className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-deep-saffron/30 transition-all flex flex-col h-full"
              >
                <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous Recipe
                </div>
                <h4 className="text-lg font-serif text-forest-green group-hover:text-deep-saffron transition-colors leading-tight">
                  {previousRecipe.subTopic}
                </h4>
                <p className="text-xs text-gray-400 mt-2 line-clamp-1">{previousRecipe.mainTopic}</p>
              </Link>
            )}
          </div>

          <div className="flex flex-col text-right">
            {nextRecipe && (
              <Link
                href={`/recipes/${nextRecipe.id}`}
                className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-deep-saffron/30 transition-all flex flex-col h-full items-end"
              >
                <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Next Recipe
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-serif text-forest-green group-hover:text-deep-saffron transition-colors leading-tight">
                  {nextRecipe.subTopic}
                </h4>
                <p className="text-xs text-gray-400 mt-2 line-clamp-1">{nextRecipe.mainTopic}</p>
              </Link>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
