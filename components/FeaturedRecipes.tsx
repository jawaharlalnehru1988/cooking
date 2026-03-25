import Link from "next/link";

export default function FeaturedRecipes() {
  const recipes = [
    {
      id: 53,
      title: "Classic Comfort Kitchari",
      description: "The ultimate healing meal. A perfect balance of mung dal, basmati rice, and warming spices.",
      tag: "Digestive",
      tagColor: "bg-forest-green",
      time: "45 Mins",
      difficulty: "Intermediate",
    },
    {
      id: 96,
      title: "Sacred Palak Paneer",
      description: "Fresh homemade paneer cubes simmered in a vibrant, spiced spinach purée. Deeply satisfying.",
      tag: "Rich & Creamy",
      tagColor: "bg-deep-saffron",
      time: "60 Mins",
      difficulty: "Advanced",
    },
    {
      id: 164,
      title: "Royal Saffron Laddu",
      description: "Traditional chickpea flour sweets infused with cardamom and premium Kashmiri saffron.",
      tag: "Sweet Offering",
      tagColor: "bg-vedic-gold",
      time: "30 Mins",
      difficulty: "Easy",
    }
  ];

  return (
    <section className="py-24 bg-spiritual-cream dark:bg-gray-950 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-forest-green dark:text-forest-green mb-2">Featured Recipes</h2>
            <p className="text-muted">Nourishing the body and soul</p>
          </div>
          <Link className="text-deep-saffron font-bold hover:underline" href="/recipes">
            View All Recipes →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <Link key={index} href={`/recipes/${recipe.id}`}>
              <article className="bg-card-bg rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 group hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex justify-between items-center">
                    <span
                      className={`${recipe.tagColor} text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest`}
                    >
                      {recipe.tag}
                    </span>
                    <div className="flex items-center text-[10px] text-muted font-bold tracking-tighter uppercase">
                      <span className="mr-3">⏱ {recipe.time}</span>
                      <span>🔥 {recipe.difficulty}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif text-forest-green dark:text-forest-green mb-4 group-hover:text-deep-saffron transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-8">
                    {recipe.description}
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-forest-green dark:text-forest-green group-hover:text-deep-saffron transition-colors border-t border-gray-50 dark:border-gray-800 pt-6">
                  Experience Recipe
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
