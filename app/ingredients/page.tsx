import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ingredientTaxonomy = [
  {
    category: "Grains & Cereals",
    icon: "🌾",
    description: "The primary source of energy and grounding in the Sattvic diet.",
    items: [
      { name: "Basmati Rice", detail: "Long-grain, aromatic, and easy to digest." },
      { name: "Barley (Jau)", detail: "Cooling grain, excellent for digestion and detox." },
      { name: "Whole Wheat", detail: "Traditional stone-ground (Atta) for vitality." },
      { name: "Millet", detail: "Ancient, gluten-free grains like Jowar and Bajra." },
      { name: "Buckwheat", detail: "Heart-healthy, used in Ekadashi fasting." }
    ]
  },
  {
    category: "Legumes & Pulses",
    icon: "🫘",
    description: "Essential plant-based proteins that sustain the body.",
    items: [
      { name: "Moong Dal (Yellow)", detail: "The most Sattvic legume, perfectly balanced." },
      { name: "Chana Dal", detail: "Rich in fiber and provides steady energy." },
      { name: "Toor Dal", detail: "A staple for traditional Indian sambars and dals." },
      { name: "Chickpeas", detail: "Hearty and versatile for curries and salads." },
      { name: "Lentils", detail: "Quick-cooking and packed with essential minerals." }
    ]
  },
  {
    category: "Pure Dairy",
    icon: "🥛",
    description: "The essence of the cow's mercy, promoting spiritual clarity.",
    items: [
      { name: "A2 Desi Cow Milk", detail: "Purest form of milk for building Ojas." },
      { name: "Ghee", detail: "Clarified butter, used for digestion and memory." },
      { name: "Fresh Paneer", detail: "Homemade cheese, rich in soft protein." },
      { name: "Buttermilk (Chaas)", detail: "Cooling and excellent for gut health." },
      { name: "Yogurt (Curd)", detail: "Probiotic-rich, best consumed when fresh." }
    ]
  },
  {
    category: "Sattvic Vegetables",
    icon: "🥦",
    description: "Life-affirming plants that cleanse and nourish.",
    items: [
      { name: "Bottle Gourd (Lauki)", detail: "High water content, extremely cooling." },
      { name: "Cabbage & Cauliflower", detail: "Cruciferous vitality when cooked gently." },
      { name: "Spinach & Greens", detail: "Rich in iron and life-force energy." },
      { name: "Carrots & Beetroots", detail: "Grounding roots that build healthy blood." },
      { name: "Zucchini & Pumpkin", detail: "Sweet, calming, and balancing for all." }
    ]
  },
  {
    category: "Fresh Fruits",
    icon: "🍎",
    description: "Direct gifts from the sun, highest in Prana.",
    items: [
      { name: "Mangoes & Papayas", detail: "Enzyme-rich fruits that aid digestion." },
      { name: "Apples & Pears", detail: "Fiber-rich and cleansing for the system." },
      { name: "Bananas", detail: "Instant energy and grounding potassium." },
      { name: "Grapes & Pomegranates", detail: "Blood-purifying and antioxidant-rich." },
      { name: "Melons", detail: "Hydrating and cooling during warm seasons." }
    ]
  },
  {
    category: "Spices & Herbs",
    icon: "🌱",
    description: "Medicinal aromatics that balance the three doshas.",
    items: [
      { name: "Turmeric", detail: "The golden healer, anti-inflammatory purity." },
      { name: "Ginger", detail: "The universal medicine for internal fire." },
      { name: "Cumin & Coriander", detail: "Essential for digestive harmony (Agni)." },
      { name: "Cardamom & Fennel", detail: "Cooling spices for heart and breath." },
      { name: "Asafoetida (Hing)", detail: "Replaces onion/garlic, aids in digestion." }
    ]
  },
  {
    category: "Nuts & Seeds",
    icon: "🥜",
    description: "Concentrated bursts of energy and healthy fats.",
    items: [
      { name: "Almonds", detail: "Soaked and peeled for maximum brain power." },
      { name: "Walnuts", detail: "Omega-rich nuts for nervous system health." },
      { name: "Sesame Seeds", detail: "Rich in calcium and warming for winter." },
      { name: "Pumpkin Seeds", detail: "Zinc-rich and grounding for the mind." },
      { name: "Cashews", detail: "Creamy and providing healthy minerals." }
    ]
  },
  {
    category: "Natural Sweeteners",
    icon: "🍯",
    description: "Sweetness that delights without depleting.",
    items: [
      { name: "Jaggery (Gur)", detail: "Iron-rich, unrefined sugarcane juice." },
      { name: "Raw Honey", detail: "Healing nectar, never to be heated." },
      { name: "Mishri (Rock Sugar)", detail: "Cooling sweetener for Pitta balance." },
      { name: "Dates", detail: "Nature's candy, provide instant vitality." },
      { name: "Maple Syrup", detail: "Pure sap from trees, rich in minerals." }
    ]
  }
];

export default function IngredientsPage() {
  return (
    <div className="bg-spiritual-cream dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-200 font-sans transition-colors">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <header className="mb-20 text-center">
          <span className="text-forest-green dark:text-forest-green font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            The Sattvic Pantry
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-deep-saffron mb-6">
            Ingredient Taxonomy
          </h1>
          <div className="w-24 h-1 bg-forest-green mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive guide to the pure, life-affirming ingredients that form the foundation of a Krishna Conscious kitchen.
          </p>
        </header>

        {/* Taxonomy Grid */}
        <div className="space-y-16">
          {ingredientTaxonomy.map((category, idx) => (
            <section key={idx} className="bg-white dark:bg-gray-900 rounded-[3rem] shadow-sm border border-orange-100 dark:border-gray-800 overflow-hidden transition-colors">
              <div className="grid md:grid-cols-3">
                {/* Category Info */}
                <div className="bg-deep-saffron p-10 md:p-12 text-white flex flex-col justify-center">
                  <div className="text-5xl mb-6">{category.icon}</div>
                  <h2 className="text-3xl font-serif mb-4">{category.category}</h2>
                  <p className="text-white/80 leading-relaxed italic">
                    {category.description}
                  </p>
                </div>

                {/* Items List */}
                <div className="md:col-span-2 p-10 md:p-16">
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                    {category.items.map((item, i) => (
                      <div key={i} className="group border-b border-orange-50 dark:border-gray-800 pb-4">
                        <h3 className="text-lg font-bold text-forest-green dark:text-forest-green group-hover:text-deep-saffron transition-colors mb-1">
                          {item.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
