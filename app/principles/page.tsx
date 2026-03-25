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
  const principles = [
    { 
      id: 1, 
      title: "Ahimsa", 
      description: "Non-violence in every food choice, respecting all living entities.",
      icon: "🌿"
    },
    { 
      id: 2, 
      title: "Sattvic Diet", 
      description: "Choosing fresh, pure, and vegetarian foods that promote health and peace.",
      icon: "✨"
    },
    { 
      id: 3, 
      title: "Spirit of Devotion", 
      description: "Cooking as an act of Bhakti (love) for the pleasure of the Lord.",
      icon: "❤️"
    },
    { 
      id: 4, 
      title: "Offering (Prasadam)", 
      description: "Transforming food into Prasadam (mercy) through sacred offering.",
      icon: "🙏"
    },
    { 
      id: 5, 
      title: "Cleanliness", 
      description: "Maintaining both external and internal purity before and during cooking.",
      icon: "🧼"
    },
    { 
      id: 6, 
      title: "Kitchen Sanctity", 
      description: "Treating the cooking area as a sacred altar for divine service.",
      icon: "🏛️"
    },
    { 
      id: 7, 
      title: "No Onion & Garlic", 
      description: "Eliminating ingredients that agitate the mind and senses.",
      icon: "🚫"
    },
    { 
      id: 8, 
      title: "The Role of Ghee", 
      description: "Using clarified butter for physical vitality and spiritual clarity.",
      icon: "🧈"
    },
    { 
      id: 9, 
      title: "Mindful Cooking", 
      description: "Maintaining a meditative focus on the Lord's pleasure.",
      icon: "🧘"
    },
    { 
      id: 10, 
      title: "No Tasting", 
      description: "Ensuring the first portion is reserved for the Divine offering.",
      icon: "🥄"
    },
    { 
      id: 11, 
      title: "Fresh & Seasonal", 
      description: "Choosing ingredients at their peak of life energy (Prana).",
      icon: "🍎"
    },
    { 
      id: 12, 
      title: "Pure Water", 
      description: "Recognizing water as a sacred essence of life and purity.",
      icon: "💧"
    },
    { 
      id: 13, 
      title: "Compassion", 
      description: "Infusing every dish with the heart of mercy and kindness.",
      icon: "🕊️"
    },
    { 
      id: 14, 
      title: "The Three Gunas", 
      description: "Understanding how different foods affect the modes of nature.",
      icon: "🌀"
    },
    { 
      id: 15, 
      title: "Spiritual Discipline", 
      description: "Dietary regulation through fasting and holy days.",
      icon: "📅"
    },
    { 
      id: 16, 
      title: "Nourishing Grains", 
      description: "Using wholesome grains to sustain body and spirit.",
      icon: "🌾"
    },
    { 
      id: 17, 
      title: "Fruits & Flowers", 
      description: "Offering nature's simplest and purest gifts.",
      icon: "🌸"
    },
    { 
      id: 18, 
      title: "No Intoxicants", 
      description: "Stepping away from caffeine, alcohol, and harmful substances.",
      icon: "🌿"
    },
    { 
      id: 19, 
      title: "Simplicity", 
      description: "Favoring high thinking over prideful culinary displays.",
      icon: "☀️"
    },
    { 
      id: 20, 
      title: "Ayurvedic Balance", 
      description: "Harmonizing the six tastes for optimal health.",
      icon: "⚖️"
    },
    { 
      id: 21, 
      title: "Stewardship", 
      description: "Sustainable and ethical sourcing in harmony with Earth.",
      icon: "🌍"
    },
    { 
      id: 22, 
      title: "Sound Vibration", 
      description: "Enriching the kitchen with chanting and devotional music.",
      icon: "🎶"
    },
    { 
      id: 23, 
      title: "Service", 
      description: "Experiencing the joy of feeding others.",
      icon: "🤝"
    },
    { 
      id: 24, 
      title: "Genetic Integrity", 
      description: "Avoiding GMO and highly processed artificial foods.",
      icon: "🧬"
    },
    { 
      id: 25, 
      title: "Gratitude", 
      description: "Acknowledging the divine source of all sustenance.",
      icon: "🤲"
    },
    { 
      id: 26, 
      title: "Mercy Distribution", 
      description: "Sharing sanctified food with everyone.",
      icon: "🎁"
    },
    { 
      id: 27, 
      title: "Universal Brotherhood", 
      description: "Respecting all jivas through our dietary choices.",
      icon: "👨‍👩‍👧‍👦"
    },
    { 
      id: 28, 
      title: "Consistency", 
      description: "Making every daily meal a continuous spiritual offering.",
      icon: "🔄"
    },
  ];

  return (
    <div className="bg-spiritual-cream dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-200 font-sans relative transition-colors">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <header className="mb-20 text-center">
          <span className="text-deep-saffron font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Vedic Wisdom
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-forest-green dark:text-forest-green mb-6">
            Krishna Conscious Principles for Cooking
          </h1>
          <div className="w-24 h-1 bg-deep-saffron mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed italic">
            "Purity in the kitchen leads to purity of the heart. Every act of cooking is an act of devotion, transforming simple ingredients into spiritual mercy."
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p) => (
            <Link 
              key={p.id} 
              href={`/principles/${p.id}`}
              className="bg-card-bg p-8 rounded-3xl shadow-sm border border-gray-50 dark:border-gray-800 hover:shadow-xl hover:border-deep-saffron/20 transition-all group cursor-pointer active:scale-95 transform block"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-spiritual-cream dark:bg-gray-800 flex items-center justify-center text-2xl shrink-0 group-hover:bg-deep-saffron group-hover:text-white transition-all">
                  {p.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-forest-green dark:text-forest-green mb-2 group-hover:text-deep-saffron transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center text-xs font-bold text-deep-saffron uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Article <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-24 p-12 bg-forest-green dark:bg-card-bg rounded-[3rem] text-white dark:text-gray-200 text-center relative overflow-hidden shadow-2xl transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-serif mb-6 text-vedic-gold">
              The Magic of Prasadam
            </h3>
            <p className="text-white/80 dark:text-gray-300 text-lg leading-relaxed mb-8">
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

      <Footer />
    </div>
  );
}
