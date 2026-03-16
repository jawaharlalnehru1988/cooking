import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface CookingArticle {
  id: number;
  mainTopic: string;
  subTopic: string;
  article: string;
  slug: string;
  language: string;
  created_at: string;
}

async function getRecipes(): Promise<CookingArticle[]> {
  const res = await fetch("https://api.askharekrishna.com/api/v1/cooking/articles/", {
    next: { revalidate: 60 }, // Revalidate every minute
  });
  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return res.json();
}

export default async function RecipesPage() {
  const recipes = await getRecipes();

  // Group recipes by mainTopic
  const groupedRecipes = recipes.reduce((acc, recipe) => {
    if (!acc[recipe.mainTopic]) {
      acc[recipe.mainTopic] = [];
    }
    acc[recipe.mainTopic].push(recipe);
    return acc;
  }, {} as Record<string, CookingArticle[]>);

  return (
    <div className="bg-spiritual-cream min-h-screen text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-forest-green mb-4">
            Sanctified Recipes
          </h1>
          <div className="w-24 h-1 bg-deep-saffron mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of Sattvik recipes, prepared with devotion and mindfulness.
            Nourish your body and soul with these ancient Vedic flavors.
          </p>
        </header>

        {Object.entries(groupedRecipes).map(([topic, articles]) => (
          <section key={topic} className="mb-20">
            <h2 className="text-3xl font-serif text-forest-green mb-8 pb-2 border-b-2 border-vedic-gold/20 inline-block">
              {topic}
            </h2>
            <div className="grid gap-12">
              {articles.map((recipe) => (
                <article
                  key={recipe.id}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{recipe.subTopic}</h3>
                      <div className="prose prose-stone prose-sm sm:prose-base max-w-none">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            h1: ({ children }) => (
                              <h1 className="text-3xl font-serif text-forest-green mt-8 mb-4 border-b-2 border-vedic-gold/20 pb-2">
                                {children}
                              </h1>
                            ),
                            h2: ({ children }) => (
                              <h2 className="text-2xl font-serif text-deep-saffron mt-6 mb-3 border-b border-vedic-gold/10 pb-1">
                                {children}
                              </h2>
                            ),
                            h3: ({ children }) => (
                              <h3 className="text-xl font-bold text-forest-green mt-4 mb-2">
                                {children}
                              </h3>
                            ),
                            p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                            strong: ({ children }) => (
                              <strong className="text-deep-saffron font-bold">{children}</strong>
                            ),
                            ul: ({ children }) => (
                              <ul className="space-y-2 mb-6 ml-4 custom-bullet-list">
                                {children}
                              </ul>
                            ),
                            ol: ({ children }) => (
                              <ol className="list-decimal space-y-4 mb-8 ml-8 text-gray-700 leading-relaxed">
                                {children}
                              </ol>
                            ),
                            li: ({ children }) => (
                              <li className="text-gray-700">
                                {children}
                              </li>
                            ),
                            hr: () => <hr className="my-8 border-t-2 border-vedic-gold/10" />,
                          }}
                        >
                          {recipe.article}
                        </ReactMarkdown>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <span className="bg-spiritual-cream text-deep-saffron px-4 py-2 rounded-full text-sm font-bold border border-deep-saffron/20">
                        {recipe.language.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-50 text-xs text-gray-400 flex justify-between items-center">
                    <span>Published: {new Date(recipe.created_at).toLocaleDateString()}</span>
                    <button className="text-deep-saffron hover:underline font-bold">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {recipes.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-200">
            <p className="text-gray-500">No recipes found. Check back soon for more inspiration!</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
