export default function FeaturedRecipes() {
  const recipes = [
    {
      title: "Classic Comfort Kitchari",
      description: "The ultimate healing meal. A perfect balance of mung dal, basmati rice, and warming spices.",
      tag: "Digestive",
      tagColor: "bg-forest-green",
      time: "45 Mins",
      difficulty: "Intermediate",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzMQUiDf530snw7OBOIPCh5XmHF1epp5x-YV0HTX2fQPwm7T3D9BMGnwvJpXMgC-RqRLynDKPqtBIvszvjTerXeaQSg9rmOsUEctFxBgjPGK9O6QIp1J4j9ca7ICOeZFYQqJwlJauD9ckDbbuUPIv0Sf-Bnc7rNtdvZ8H4GAVTAL0zvNKn4xxZh3hVVy7lYiDV2pq0ckMYSaGWB2j497mox-OeRzVPG__npLXFRKlZhqUuH_8L6AW3TGNE3yg922bnD_Rw6GxnGAk"
    },
    {
      title: "Sacred Palak Paneer",
      description: "Fresh homemade paneer cubes simmered in a vibrant, spiced spinach purée. Deeply satisfying.",
      tag: "Rich & Creamy",
      tagColor: "bg-deep-saffron",
      time: "60 Mins",
      difficulty: "Advanced",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_CjVnZFF2XqRHKcIVZJUaxC1u02DXuGY1aPcZ6DibKAKvqYfGN7aVlii4lxtLz3KqdaPGr6qb0TJgwCFA7LzcpOwhaOR04gem0sOXYRtEWVJ4fwxqT_nXo4fUFs9ZG1rl3D5lSVHlz21CzL9k22J95O-xPREK3n3pYv2l9eifdAoG7f9vzFa6BXR5wcS14gnDqlr-HE1g5_V29ZS3pUt8zTsF6-6t3fAvvK7CF7qX6gapgQLppWMC5084Hs2EuN7PlQWKRUYjvko"
    },
    {
      title: "Royal Saffron Laddu",
      description: "Traditional chickpea flour sweets infused with cardamom and premium Kashmiri saffron.",
      tag: "Sweet Offering",
      tagColor: "bg-vedic-gold",
      time: "30 Mins",
      difficulty: "Easy",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHULsPhK9a-6Vd7ZPcYi4X1Ig0MTUSIlDmthNpESAvCJEQD2qufJxxgOfqrhHB6tc9S6hmzxAAJdAKgy7f2hu_zyt7WtA11dvy7eiqpOZzRlFq6L4L6sYntoptVyW4_8YvrMboOb8ukkOo9b8ssGvIRLEXsYYoG5qx0Hd9S1JKS9l5r5GDWXydUYzYzut-4XaWz4qXj13oPRA8Fgs-yh5MP0SpDvgTK3IiebAa6AnYWXpWYwj09BRdtITATonBYH2iSMDCZDNSkQY"
    }
  ];

  return (
    <section className="py-24 bg-spiritual-cream">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-forest-green mb-2">Featured Recipes</h2>
            <p className="text-gray-600">Nourishing the body and soul</p>
          </div>
          <a className="text-deep-saffron font-bold hover:underline" href="#">
            View All Recipes →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={recipe.image}
                />
                <div
                  className={`absolute top-4 left-4 ${recipe.tagColor} text-white px-3 py-1 rounded-full text-xs font-bold`}
                >
                  {recipe.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
                <div className="flex items-center text-xs text-gray-400 space-x-4">
                  <span>⏱ {recipe.time}</span>
                  <span>🔥 {recipe.difficulty}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
