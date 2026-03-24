"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Principle {
  id: number;
  title: string;
  description: string;
  application: string;
  benefit: string;
  icon: string;
}

export default function PrinciplesPage() {
  const [selectedPrinciple, setSelectedPrinciple] = useState<Principle | null>(null);

  const principles: Principle[] = [
    { 
      id: 1, 
      title: "Ahimsa", 
      description: "Non-violence in every food choice, respecting all living entities.",
      application: "Choosing only vegetarian ingredients and avoiding products derived from animal suffering. Sourcing from ethical farms whenever possible.",
      benefit: "Develops compassion and reduces the burden of karma associated with taking a life.",
      icon: "🌿"
    },
    { 
      id: 2, 
      title: "Sattvic Diet", 
      description: "Choosing fresh, pure, and vegetarian foods that promote health and peace.",
      application: "Focusing on fruits, vegetables, grains, nuts, and dairy products. Avoiding stale, overcooked, or chemically processed foods.",
      benefit: "Promotes mental clarity, physical stamina, and spiritual equilibrium (Sattva Guna).",
      icon: "✨"
    },
    { 
      id: 3, 
      title: "Spirit of Devotion", 
      description: "Cooking as an act of Bhakti (love) for the pleasure of the Lord.",
      application: "Approaching the kitchen as a place of service rather than a chore. Maintaining a grateful heart while preparing the meal.",
      benefit: "Transforms a mundane activity into a powerful spiritual link (Yoga) with the Divine.",
      icon: "❤️"
    },
    { 
      id: 4, 
      title: "Offering (Prasadam)", 
      description: "Transforming food into Prasadam (mercy) through sacred offering.",
      application: "Placing the prepared food on a special plate and offering it to the Lord with prayers before anyone eats.",
      benefit: "The food becomes sanctified, purifying the heart and consciousness of those who consume it.",
      icon: "🙏"
    },
    { 
      id: 5, 
      title: "Cleanliness", 
      description: "Maintaining both external and internal purity before and during cooking.",
      application: "Bathing before entering the kitchen, wearing clean clothes, and keeping the workspace spotless.",
      benefit: "Creates a high-vibrational environment that attracts divine energy and ensures health.",
      icon: "🧼"
    },
    { 
      id: 6, 
      title: "Kitchen Sanctity", 
      description: "Treating the cooking area as a sacred altar for divine service.",
      application: "Keeping shoes out of the kitchen and avoiding unnecessary talk. Treating every utensil with respect.",
      benefit: "Ensures the food is infused with the highest possible spiritual vibration.",
      icon: "🏛️"
    },
    { 
      id: 7, 
      title: "No Onion & Garlic", 
      description: "Eliminating ingredients that agitate the mind and senses.",
      application: "Using Hing (Asafoetida) as a substitute for flavor without the rajasic and tamasic effects.",
      benefit: "Keeps the mind calm, steady, and suitable for deep meditation and prayer.",
      icon: "🚫"
    },
    { 
      id: 8, 
      title: "The Role of Ghee", 
      description: "Using clarified butter for physical vitality and spiritual clarity.",
      application: "Using small amounts of high-quality ghee to sauté spices and garnish dishes.",
      benefit: "Nourishes the 'Ojas' (life essence) and enhances the absorption of spiritual nutrients.",
      icon: "🧈"
    },
    { 
      id: 9, 
      title: "Mindful Cooking", 
      description: "Maintaining a meditative focus on the Lord's pleasure.",
      application: "Avoiding distractions like phone screens or negative gossip in the kitchen.",
      benefit: "Ensures the chef's consciousness is pure, which directly affects the food's energy.",
      icon: "🧘"
    },
    { 
      id: 10, 
      title: "No Tasting", 
      description: "Ensuring the first portion is reserved for the Divine offering.",
      application: "Learning to judge seasoning by smell and sight. The Lord is the first to enjoy the meal.",
      benefit: "Overcomes self-centeredness and fosters a sense of selfless service (Akaitava Bhakti).",
      icon: "🥄"
    },
    { 
      id: 11, 
      title: "Fresh & Seasonal", 
      description: "Choosing ingredients at their peak of life energy (Prana).",
      application: "Shopping at local markets and selecting fruits and vegetables in their natural harvest season.",
      benefit: "Maximizes the life force (Prana) available to the body and spirit.",
      icon: "🍎"
    },
    { 
      id: 12, 
      title: "Pure Water", 
      description: "Recognizing water as a sacred essence of life and purity.",
      application: "Using filtered, clean water and treating it with gratitude before adding it to recipes.",
      benefit: "Water carries the memory of our intention; purity here leads to purity in the dish.",
      icon: "💧"
    },
    { 
      id: 13, 
      title: "Compassion", 
      description: "Infusing every dish with the heart of mercy and kindness.",
      application: "Thinking about the well-being of those who will eat the food while you cook.",
      benefit: "Creates a ripple effect of peace and goodwill throughout the community.",
      icon: "🕊️"
    },
    { 
      id: 14, 
      title: "The Three Gunas", 
      description: "Understanding how different foods affect the modes of nature.",
      application: "Favoring Sattvic foods (clarity) over Rajasic (passion) and Tamasic (ignorance).",
      benefit: "Gradually elevates our consciousness to the platform of pure goodness.",
      icon: "🌀"
    },
    { 
      id: 15, 
      title: "Spiritual Discipline", 
      description: "Dietary regulation through fasting and holy days.",
      application: "Observing Ekadashi (avoiding grains and personal sacrifice) twice a month.",
      benefit: "Increases our focus on spiritual practice and purifies the digestive system.",
      icon: "📅"
    },
    { 
      id: 16, 
      title: "Nourishing Grains", 
      description: "Using wholesome grains to sustain body and spirit.",
      application: "Using whole wheat, rice, and ancient grains. Avoiding highly refined flours.",
      benefit: "Provides the steady energy required for a life of service and meditation.",
      icon: "🌾"
    },
    { 
      id: 17, 
      title: "Fruits & Flowers", 
      description: "Offering nature's simplest and purest gifts.",
      application: "Incorporating colorful fruits and edible flowers into the daily offering.",
      benefit: "Reminds us of the beauty of God's creation in its most delicate forms.",
      icon: "🌸"
    },
    { 
      id: 18, 
      title: "No Intoxicants", 
      description: "Stepping away from caffeine, alcohol, and harmful substances.",
      application: "Replacing tea/coffee with herbal infusions and natural fruit juices.",
      benefit: "Allows the brain to function at its natural, most efficient spiritual capacity.",
      icon: "🌿"
    },
    { 
      id: 19, 
      title: "Simplicity", 
      description: "Favoring high thinking over prideful culinary displays.",
      application: "Avoiding overly complex or 'showy' cooking that focuses on the chef's ego.",
      benefit: "Keeps the heart humble and focused on the true goal: pleasing the Divine.",
      icon: "☀️"
    },
    { 
      id: 20, 
      title: "Ayurvedic Balance", 
      description: "Harmonizing the six tastes for optimal health.",
      application: "ensuring a meal has Sweet, Sour, Salty, Bitter, Pungent, and Astringent elements.",
      benefit: "Balances the doshas (Vata, Pitta, Kapha) and prevents disease.",
      icon: "⚖️"
    },
    { 
      id: 21, 
      title: "Stewardship", 
      description: "Sustainable and ethical sourcing in harmony with Earth.",
      application: "Reducing waste, using moderate portions, and supporting organic agriculture.",
      benefit: "Develops a sense of global responsibility and gratitude for nature's bounty.",
      icon: "🌍"
    },
    { 
      id: 22, 
      title: "Sound Vibration", 
      description: "Enriching the kitchen with chanting and devotional music.",
      application: "Playing peaceful kirtan or chanting 'Hare Krishna' while chopping and stirring.",
      benefit: "Cleanses the subtle air in the kitchen and infuses the food with spiritual sound.",
      icon: "🎶"
    },
    { 
      id: 23, 
      title: "Service", 
      description: "Experiencing the joy of feeding others.",
      application: "Cooking generous portions specifically for the purpose of sharing with guests.",
      benefit: "Expands the heart from 'my meal' to 'our mercy'.",
      icon: "🤝"
    },
    { 
      id: 24, 
      title: "Genetic Integrity", 
      description: "Avoiding GMO and highly processed artificial foods.",
      application: "Checking labels and favoring heirlooom or traditional seeds and species.",
      benefit: "Respects the original design of the Divine's creation in nature.",
      icon: "🧬"
    },
    { 
      id: 25, 
      title: "Gratitude", 
      description: "Acknowledging the divine source of all sustenance.",
      application: "Pausing for a moment of silence or a short prayer before starting to cook.",
      benefit: "Eliminates the 'controlling' mentality and fosters dependence on divine grace.",
      icon: "🤲"
    },
    { 
      id: 26, 
      title: "Mercy Distribution", 
      description: "Sharing sanctified food with everyone.",
      application: "Ensuring that Prasadam is available to anyone who visits the home or temple.",
      benefit: "Spreads spiritual peace and compassion throughout the neighborhood.",
      icon: "🎁"
    },
    { 
      id: 27, 
      title: "Universal Brotherhood", 
      description: "Respecting all jivas through our dietary choices.",
      application: "Teaching our children and community why we choose a non-violent diet.",
      benefit: "Fosters a world of peace by acknowledging all beings as children of the same Father.",
      icon: "👨‍👩‍👧‍👦"
    },
    { 
      id: 28, 
      title: "Consistency", 
      description: "Making every daily meal a continuous spiritual offering.",
      application: "Finding the rhythm in daily cooking that makes spiritual life natural and joyful.",
      benefit: "Steadies our spiritual focus and makes devotion an inseparable part of life.",
      icon: "🔄"
    },
  ];

  return (
    <div className="bg-spiritual-cream min-h-screen text-gray-800 font-sans relative">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <header className="mb-20 text-center">
          <span className="text-deep-saffron font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Vedic Wisdom
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-forest-green mb-6">
            Krishna Conscious Principles for Cooking
          </h1>
          <div className="w-24 h-1 bg-deep-saffron mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed italic">
            "Purity in the kitchen leads to purity of the heart. Every act of cooking is an act of devotion, transforming simple ingredients into spiritual mercy."
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p) => (
            <section 
              key={p.id} 
              onClick={() => setSelectedPrinciple(p)}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 hover:shadow-xl hover:border-deep-saffron/20 transition-all group cursor-pointer active:scale-95 transform"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-spiritual-cream flex items-center justify-center text-2xl shrink-0 group-hover:bg-deep-saffron group-hover:text-white transition-all">
                  {p.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-forest-green mb-2 group-hover:text-deep-saffron transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-sm line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center text-xs font-bold text-deep-saffron uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-24 p-12 bg-forest-green rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-serif mb-6 text-vedic-gold">
              The Magic of Prasadam
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              In the Bhakti tradition, food cooked with love and offered to Krishna is known as **Prasadam**—literally "The Mercy of the Lord." It is believed that such food nourishes not only the body but cleanses the soul of past karma and awakens our natural spiritual consciousness.
            </p>
            <div className="flex justify-center gap-4">
              <div className="w-3 h-3 bg-deep-saffron rounded-full"></div>
              <div className="w-3 h-3 bg-vedic-gold rounded-full"></div>
              <div className="w-3 h-3 bg-deep-saffron rounded-full"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Detail Modal Overlay */}
      {selectedPrinciple && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-forest-green/90 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedPrinciple(null)}
        >
          <div 
            className="bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-spiritual-cream p-10 md:p-14 relative text-center">
              <button 
                onClick={() => setSelectedPrinciple(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-deep-saffron transition-colors shadow-sm"
              >
                ✕
              </button>
              <div className="text-5xl mb-6">{selectedPrinciple.icon}</div>
              <span className="text-deep-saffron font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
                Principle {selectedPrinciple.id}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-forest-green">
                {selectedPrinciple.title}
              </h2>
            </div>
            
            <div className="p-10 md:p-14 space-y-10">
              <div>
                <h4 className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-deep-saffron mb-4">
                  <div className="w-8 h-[2px] bg-deep-saffron mr-3"></div>
                  The Philosophy
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedPrinciple.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-forest-green mb-4">
                    In the Kitchen
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {selectedPrinciple.application}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-forest-green mb-4">
                    Spiritual Gain
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {selectedPrinciple.benefit}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedPrinciple(null)}
                  className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                >
                  Close
                </button>
                <Link
                  href={`/principles/${selectedPrinciple.id}`}
                  className="flex-1 py-4 bg-forest-green text-white rounded-2xl font-bold hover:bg-deep-saffron transition-all text-center flex items-center justify-center"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
