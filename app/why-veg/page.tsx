import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WhyVegPage() {
  const topics = [
    { id: 1, title: "The Protein Myth", description: "Addressing the common concern: 'Where do vegetarians get their protein?'" },
    { id: 2, title: "Plants Have Life Too", description: "Understanding the difference in consciousness and the biological response to pain." },
    { id: 3, title: "The Food Chain Argument", description: "A moral and scientific critique of the 'Top of the Food Chain' justification." },
    { id: 4, title: "Ancestral Hunting", description: "Exploring human evolution and why our past doesn't dictate our compassionate future." },
    { id: 5, title: "Physical Vitality", description: "Why plant-based diets provide superior strength and endurance for athletes and workers." },
    { id: 6, title: "The Choice Argument", description: "Is diet truly a personal choice when it involves the lives of others?" },
    { id: 7, title: "Purpose of Creation", description: "Scriptural and philosophical insights into whether animals were 'born to be eaten'." },
    { id: 8, title: "Vitamin B12 & Nutrition", description: "Navigating the science of supplements and fortified foods in a modern diet." },
    { id: 9, title: "Overpopulation Myth", description: "Does eating animals actually help maintain ecological balance? (Hint: It's the opposite)." },
    { id: 10, title: "God's Permission", description: "Deconstructing religious misinterpretations regarding animal slaughter." },
    { id: 11, title: "Humane Slaughter", description: "The ethical contradiction of 'humane' killing and the reality of the industry." },
    { id: 12, title: "The Taste Fallacy", description: "Balancing 15 minutes of sensory pleasure against a lifetime of suffering." },
    { id: 13, title: "Anatomy of a Predator", description: "Why human teeth and digestion are biologically closer to frugivores than carnivores." },
    { id: 14, title: "Cultural Heritage", description: "Distinguishing between valuable tradition and outdated, harmful habits." },
    { id: 15, title: "Individual Impact", description: "The math behind how one person's choice saves thousands of lives over a lifetime." },
    { id: 16, title: "Economic Realities", description: "Why a whole-food plant-based diet is actually the most affordable way to live." },
    { id: 17, title: "Psychology of Meat", description: "The link between meat consumption, aggression, and mental clarity." },
    { id: 18, title: "The Water Footprint", description: "The staggering environmental cost of animal agriculture on our global water supply." },
    { id: 19, title: "Medical Pandemics", description: "How factory farming creates breeding grounds for zoonotic diseases and antibiotic resistance." },
    { id: 20, title: "Heart Disease & Meat", description: "The clinical link between animal fat consumption and cardiovascular health." },
    { id: 21, title: "The Cancer Risk", description: "Analyzing WHO findings on red and processed meats as carcinogens." },
    { id: 22, title: "Karmic Implications", description: "The spiritual law of action and reaction in relation to the suffering of others." },
    { id: 23, title: "Dharma & Ahimsa", description: "Non-violence as the supreme duty in the path of spiritual advancement." },
    { id: 24, "title": "The Voiceless Ones", description: "Developing empathy for beings that cannot advocate for their own lives." },
    { id: 25, title: "Animal Intelligence", description: "Scientific evidence of complex emotions, memories, and pain in livestock." },
    { id: 26, title: "Intestinal Biology", description: "The physiological evidence: Why our long intestines are unfit for rotting flesh." },
    { id: 27, title: "Stomach Acid pH", description: "Comparing human digestive chemistry to that of natural carnivores and herbivores." },
    { id: 28, title: "Spiritual Vibration", description: "How the 'fear energy' of animal slaughter affects our subtle body and Prana." },
    { id: 29, title: "World Hunger", description: "The efficiency gap: Feeding grains to animals vs. feeding humanity directly." },
    { id: 30, title: "Global Harmony", description: "Restoring our relationship with Mother Earth through a compassionate diet." },
  ];

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
              key={t.id} 
              href={`/why-veg/${t.id}`}
              className="bg-spiritual-cream p-8 rounded-[2rem] border border-transparent hover:border-forest-green/20 hover:shadow-2xl transition-all group block"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-forest-green font-serif font-bold mb-6 group-hover:bg-forest-green group-hover:text-white transition-colors">
                {t.id}
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
