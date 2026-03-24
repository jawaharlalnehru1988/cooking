import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import Link from "next/link";

// Elaborate content library for Krishna Conscious Principles
const principleArticles: Record<number, string> = {
  1: `
# Ahimsa: The Pillar of Compassion in the Kitchen

Ahimsa, or non-violence, is the foundational principle of a Krishna Conscious kitchen. It is not merely a dietary restriction but a profound shift in consciousness. By choosing ingredients that do not involve the suffering or death of animals, we align our nourishment with the spirit of universal love.

### The Philosophy
In the Vedic tradition, all living beings are seen as children of the Divine. To take the life of another sentient being for the sake of our own palate is considered a violation of the natural order of compassion. Ahimsa means selecting foods that carry the lowest possible karmic burden.

### In the Sattvik Kitchen
Common applications of Ahimsa include:
*   **Vegetarianism**: strictly avoiding meat, fish, and eggs.
*   **Ethical Sourcing**: Favoring dairy from protected cows whenever possible.
*   **Gratitude**: Recognizing that even plants have life, and we honor their sacrifice by offering the food back to the source of life.

### Spiritual Benefits
Practicing Ahimsa in our diet softens the heart and makes it receptive to spiritual vibration. It removes the 'anger' and 'fear' energy that meat-based diets often carry, allowing for deeper meditation and peaceful relationships.
  `,
  2: `
# Sattvic Diet: Pure Food for Clear Consciousness

The Sattvic diet is designed to promote health, longevity, and mental clarity. It is the diet of sages and seekers, focusing on foods that are naturally pure and full of life energy (Prana).

### Understanding Sattva Guna
The material world is governed by three modes (Gunas): Goodness (Sattva), Passion (Rajas), and Ignorance (Tamas). Sattvic food is that which is fresh, wholesome, naturally delicious, and prepared with love. It does not agitate the mind like overly spicy or stimulating foods do.

### Core Ingredients
A Sattvic diet revolves around:
*   **Fresh Fruits and Vegetables**: Picked at their peak of vitality.
*   **Grains and Legumes**: Providing steady energy and protein.
*   **Pure Dairy**: Milk and Ghee from well-treated cows.
*   **Natural Sweeteners**: Like jaggery or raw honey.

### Spiritual Benefits
By eating Sattvic food, we maintain the body as a temple. A clear mind is the best tool for spiritual practice, and a Sattvic diet ensures that the physical vessel does not block our higher perception.
  `,
  // ... more principles to be added logic-wise
};

// Simplified titles/descriptions for neighbor navigation
const principleList = [
  { id: 1, title: "Ahimsa" },
  { id: 2, title: "Sattvic Diet" },
  { id: 3, title: "Spirit of Devotion" },
  { id: 4, title: "Offering (Prasadam)" },
  { id: 5, title: "Cleanliness" },
  { id: 6, title: "Kitchen Sanctity" },
  { id: 7, title: "No Onion & Garlic" },
  { id: 8, title: "The Role of Ghee" },
  { id: 9, title: "Mindful Cooking" },
  { id: 10, title: "No Tasting" },
  { id: 11, title: "Fresh & Seasonal" },
  { id: 12, title: "Pure Water" },
  { id: 13, title: "Compassion" },
  { id: 14, title: "The Three Gunas" },
  { id: 15, title: "Spiritual Discipline" },
  { id: 16, title: "Nourishing Grains" },
  { id: 17, title: "Fruits & Flowers" },
  { id: 18, title: "No Intoxicants" },
  { id: 19, title: "Simplicity" },
  { id: 20, title: "Ayurvedic Balance" },
  { id: 21, title: "Stewardship" },
  { id: 22, title: "Sound Vibration" },
  { id: 23, title: "Service" },
  { id: 24, title: "Genetic Integrity" },
  { id: 25, title: "Gratitude" },
  { id: 26, title: "Mercy Distribution" },
  { id: 27, title: "Universal Brotherhood" },
  { id: 28, title: "Consistency" },
];

export default async function PrincipleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const currentId = parseInt(id);
  const article = principleArticles[currentId];
  const principleInfo = principleList.find(p => p.id === currentId);

  if (!article || !principleInfo) {
    notFound();
  }

  const currentIndex = principleList.findIndex(p => p.id === currentId);
  const prevPrinciple = currentIndex > 0 ? principleList[currentIndex - 1] : null;
  const nextPrinciple = currentIndex < principleList.length - 1 ? principleList[currentIndex + 1] : null;

  return (
    <div className="bg-spiritual-cream min-h-screen text-gray-800 font-sans pb-20">
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <Link 
          href="/principles" 
          className="inline-flex items-center text-forest-green hover:text-deep-saffron transition-colors mb-8 font-semibold group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to principles
        </Link>

        <article className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="bg-forest-green text-white p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <span className="text-vedic-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 block relative z-10">
              Principle {currentId}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight relative z-10">
              {principleInfo.title}
            </h1>
            <div className="w-20 h-1bg-deep-saffron mx-auto mt-8 rounded-full relative z-10"></div>
          </div>

          <div className="p-8 md:p-20 bg-white">
            <div className="prose prose-lg prose-forest max-w-none 
              prose-headings:font-serif prose-headings:text-forest-green 
              prose-h1:text-center prose-h1:mb-12
              prose-h3:text-deep-saffron prose-h3:border-b prose-h3:border-vedic-gold/20 prose-h3:pb-2
              prose-strong:text-forest-green prose-strong:font-bold
              prose-li:marker:text-deep-saffron
              prose-blockquote:border-deep-saffron prose-blockquote:bg-spiritual-cream/50 prose-blockquote:py-1
            ">
              <ReactMarkdown>{article}</ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Navigation Buttons */}
        <section className="grid md:grid-cols-2 gap-8 mt-12">
          {prevPrinciple ? (
            <Link 
              href={`/principles/${prevPrinciple.id}`}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-deep-saffron/30 transition-all group flex flex-col"
            >
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </span>
              <h4 className="text-xl font-serif text-forest-green group-hover:text-deep-saffron transition-colors">
                {prevPrinciple.title}
              </h4>
            </Link>
          ) : <div />}

          {nextPrinciple ? (
            <Link 
              href={`/principles/${nextPrinciple.id}`}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-deep-saffron/30 transition-all group flex flex-col text-right items-end"
            >
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center">
                Next
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <h4 className="text-xl font-serif text-forest-green group-hover:text-deep-saffron transition-colors">
                {nextPrinciple.title}
              </h4>
            </Link>
          ) : <div />}
        </section>
      </main>
      <Footer />
    </div>
  );
}
