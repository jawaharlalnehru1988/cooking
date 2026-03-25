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
  3: `
# Spirit of Devotion: Cooking as Bhakti Yoga

In Krishna Consciousness, the kitchen is more than a place for meal preparation—it is a sacred space for the practice of Bhakti, the yoga of love and devotion.

### The Philosophy
The consciousness of the cook is subtly infused into the food. If one cooks with agitation or greed, that energy is transferred. However, if one cooks as a servant of the Divine, intending to please the Lord, the food becomes spiritually charged.

### In the Kitchen
*   **Meditation**: Maintaining a peaceful, prayerful state of mind.
*   **Intention**: Constantly remembering that the meal is for the pleasure of the Lord first.
*   **Atmosphere**: Keeping a devotional mood through music, chanting, or silence.

### Spiritual Benefits
Cooking with devotion transforms a mundane chore into a powerful spiritual practice. It purifies the ego and turns the kitchen into an extension of the temple altar.
  `,
  4: `
# Offering (Prasadam): Transforming Food into Mercy

The act of offering food to the Lord is the pinnacle of the sattvik cooking process. This transformation turns ordinary ingredients into *Prasadam*, which literally means "The Mercy of the Lord."

### The Philosophy
Before we consume anything, we acknowledge that it belongs to the Creator. By offering the first portion with love and specific prayers, the food becomes sanctified. It is believed that such food is free from karma and brings spiritual liberation.

### In the Kitchen
*   **The Altar**: Placing the best portion of the meal on a special plate.
*   **Prayers**: Reciting Mantras or prayers of offering with a sincere heart.
*   **Honor**: Eating the food only after the offering is complete, treating it with great respect.

### Spiritual Benefits
Consuming Prasadam purifies the heart and mind. It is described as a "medicine for the soul," awakening our natural spiritual consciousness and providing deep inner peace.
  `,
  5: `
# Cleanliness: The External and Internal Foundation

"Cleanliness is next to Godliness." In a Krishna Conscious kitchen, purity (Saucam) is strictly maintained to ensure the highest standards of spiritual offering.

### The Philosophy
Dirt and disorder are associated with the mode of ignorance (Tamas). High standards of cleanliness attract divine energy and ensure that the food is physically and spiritually pure.

### In the Kitchen
*   **Personal Purity**: Bathing before cooking and wearing fresh, clean clothes.
*   **Workspace**: Keeping the floors, counters, and utensils spotless.
*   **Cross-Contamination**: Ensuring that only pure ingredients enter the kitchen space.

### Spiritual Benefits
A clean environment fosters a clear, focused mind. It allows the cook to maintain the necessary meditative state and shows respect for the sanctity of the service.
  `,
  6: `
# Kitchen Sanctity: Turning a Room into a Temple

Treating the kitchen as a sacred space (altar) is essential for maintaining the right consciousness during food preparation.

### The Philosophy
The kitchen is where the Lord's meal is prepared. Therefore, it should be treated with the same reverence as the temple room. It is not a place for idle gossip, shoes, or non-devotional activities.

### In the Kitchen
*   **Behavior**: Maintaining a respectful, quiet, or prayerful atmosphere.
*   **Exclusivity**: Limiting access to those who are clean and focused on service.
*   **Utensils**: Treating every tool as an instrument for divine service.

### Spiritual Benefits
When the kitchen is sacred, the act of cooking becomes effortless and naturally meditative. It creates a powerful shield against negative influences and ensures the food's purity.
  `,
  7: `
# No Onion & Garlic: Cultivating a Steady Mind

One of the most distinctive features of a Krishna Conscious diet is the total exclusion of onion and garlic, despite their common culinary use.

### The Philosophy
According to the Vedas, onion and garlic are in the 'lower' modes of passion and ignorance. They are known to agitate the mind and senses, making deep meditation more difficult. They are also considered 'stimulating' in a way that interferes with spiritual focus.

### In the Kitchen
*   **Substitutes**: Using Asafoetida (Hing) to achieve similar savory flavors without the agitation.
*   **Herbs**: Relying on ginger, chilies, and diverse spices to create rich, complex tastes.

### Spiritual Benefits
Eliminating these ingredients helps the practitioner maintain a calm, steady consciousness. It facilitates easier control over the mind and senses, which is vital for spiritual progress.
  `,
  8: `
# The Role of Ghee: The Essence of Purity

Ghee, or clarified butter, is considered one of the most sacred and nourishing substances in the Sattvik tradition.

### The Philosophy
Ghee is described as 'liquid gold' and the essence of the cow's mercy. It is chemically stable and spiritually pure, used extensively in Vedic rituals and Ayurvedic medicine.

### In the Kitchen
*   **Sautéing**: Using ghee for tempering spices (tadka) to release their fullest medicinal and flavor potential.
*   **Finishing**: Adding a small amount to rice or breads for richness and vitality.

### Spiritual Benefits
Ghee is said to nourish 'Ojas', the fundamental vital energy of the body and mind. It promotes intelligence, memory, and spiritual clarity.
  `,
  9: `
# Mindful Cooking: The Power of Intent

Mindful cooking (Bhava) refers to the internal state of the chef. Every thought and emotion while cooking is said to leave an impression on the food.

### The Philosophy
If a cook is angry or stressed, the food will carry that vibration. A Krishna Conscious cook tries to remain focused on the service, avoiding distractions and maintaining a positive, prayerful intention.

### In the Kitchen
*   **Focus**: Avoiding phones, television, or distracting music in the kitchen.
*   **Vibration**: Playing kirtan (devotional chanting) to help stabilize the mind.

### Spiritual Benefits
Mindfulness ensures that the food is a carrier of peace. It also makes the act of cooking a form of dhyana (meditation), bringing the chef closer to the Divine.
  `,
  10: `
# No Tasting: Selfless Service First

In a standard kitchen, tasting for seasoning is common. In a Krishna Conscious kitchen, we refrain from tasting until the food has been offered.

### The Philosophy
The Lord is the first to enjoy the meal. Tasting it beforehand is seen as 'taking' for oneself what should be given first to the Divine. It is a practice of self-control and selfless service.

### In the Kitchen
*   **Smell and Sight**: Developing the skill to judge the balance of spices through aroma and visual cues.
*   **Consistency**: Following tested recipes carefully to ensure quality without tasting.

### Spiritual Benefits
This practice builds humility and reminds the cook that we are servants, not the primary masters or enjoyers of the material world.
  `,
  11: `
# Fresh & Seasonal: Tapping into Prana

The Sattvik tradition emphasizes the use of ingredients that are fresh and in their natural season, as they contain the highest amount of Prana (life force).

### The Philosophy
Food that is stale, frozen, or canned is considered 'dead' or tamasic. Fresh ingredients carry the vibrant energy of the earth and sun, which is then transferred to the person who eats it.

### In the Kitchen
*   **Local Sourcing**: Buying from farmers' markets or local producers.
*   **Minimal Processing**: using whole ingredients rather than pre-cut or processed versions.

### Spiritual Benefits
Eating Prana-rich food leads to a vibrant, energetic body and a sharp, alert mind, both of which are essential for active spiritual service.
  `,
  12: `
# Pure Water Selection: The Essence of Purity

Water is more than just an ingredient; it is a sacred element that carries the vibration of the environment.

### The Philosophy
Vedic science recognizes water's ability to absorb energy. In the kitchen, water should be filtered, clean, and treated with respect.

### In the Kitchen
*   **Filtration**: Using high-quality filters to remove physical impurities.
*   **Invocation**: Treating the water as a gift from nature, often reciting silent prayers of gratitude while using it.

### Spiritual Benefits
Since the human body is mostly water, consuming pure water helps maintain internal cleanliness and stability, facilitating a easier flow of spiritual energy.
  `,
  13: `
# Compassion as an Ingredient

Compassion is the 'secret ingredient' in every Krishna Conscious dish. It is the intent to bring joy and health to those who consume the meal.

### The Philosophy
Cooking is an act of nourishment for the body and soul. If the cook truly cares for the well-being of the eaters, that compassion transforms the dining experience into a moment of connection and healing.

### In the Kitchen
*   **Generosity**: Preparing enough to share with others.
*   **Care**: Selecting ingredients and methods that suit the health needs of the family or guests.

### Spiritual Benefits
Developing compassion in the kitchen helps us see others as fellow spiritual beings. it softens the heart and expands our awareness beyond our own needs.
  `,
  14: `
# The Three Gunas: Navigating Food Energies

Understanding the Three Gunas (Sattva, Rajas, Tamas) is essential for selecting the right foods for spiritual progress.

### The Philosophy
*   **Sattvic (Goodness)**: Fresh, light, simple, nourishing. Promotes clarity.
*   **Rajasic (Passion)**: Overly spicy, sour, salty, or stimulating. Promotes agitation.
*   **Tamasic (Ignorance)**: Stale, rotten, fermented, heavily processed, or meat-based. Promotes lethargy.

### In the Kitchen
We aim for the Sattvic mode. We avoid excessive spices (Rajas) and 'dead' or unclean foods (Tamas).

### Spiritual Benefits
By consistently choosing Sattvic food, we naturally elevate our consciousness to a higher platform, making it easier to engage in deep study and meditation.
  `,
  15: `
# Spiritual Discipline: Fasting and Holy Days

Spiritual life involves dietary discipline to help the practitioner focus more on the internal and less on the external.

### The Philosophy
Fasting, such as on Ekadashi (the 11th day of the moon), is meant to simplify the day's tasks so one can spend more time in prayer. It also allows the body's digestive system to rest and heal.

### In the Kitchen
*   **Grain-Free**: Strictly avoiding grains and beans on Ekadashi.
*   **Simple Meals**: Preparing fruit or light roots and tubers to maintain energy without excessive cooking.

### Spiritual Benefits
Discipline builds willpower and shows our commitment to the spiritual path. It purifies the blood and helps the mind remain focused on higher pursuits.
  `,
  16: `
# Nourishing Grains: Sustaining Body and Spirit

Grains are considered a primary source of strength and stability in the Vedic diet.

### The Philosophy
Wholesome grains like wheat, rice, and barley provide the steady fuel needed for daily work and spiritual service. They are seen as gifts from the Lord to sustain human life.

### In the Kitchen
*   **Whole Grains**: using whole wheat (Atta) for Chapatis and unpolished rice whenever possible.
*   **Preparation**: properly cooking and seasoning grains to make them easy to digest.

### Spiritual Benefits
Sustenance from pure grains allows for a calm and capable body, preventing the extremes of lethargy or hyperactivity.
  `,
  17: `
# Fruits and Flowers: Nature's Purest Gifts

Fruits and flowers represent the peak of nature's beauty and simplicity, often used in direct offerings to the Divine.

### The Philosophy
Fruits are the most 'natural' food for humanity, requiring no violence (even to the plant) to harvest. They are Sattvic and contain the highest vibrational energy.

### In the Kitchen
*   **Offerings**: Selecting the most beautiful, ripe fruit for the Lord's tray.
*   **Esthetics**: Using edible flowers like rose or hibiscus to beautify and scent the food.

### Spiritual Benefits
Fruits and flowers remind us of the generosity of God. Their natural sweetness and beauty awaken a sense of gratitude and aesthetic joy.
  `,
  18: `
# Avoiding Intoxicants: Preserving Mental Clarity

A critical principle in Krishna Consciousness is the total avoidance of caffeine, alcohol, and tobacco.

### The Philosophy
Intoxicants cloud the mind and create a false sense of pleasure. They interfere with our natural ability to connect with the Divine and maintain a stable meditative focus.

### In the Kitchen
*   **Herbal Tea**: Replacing tea/coffee with ginger, mint, or spice-based infusions.
*   **Fresh Juices**: using natural fruit sugars for energy instead of caffeine.

### Spiritual Benefits
Freedom from intoxication leads to a naturally alert and peaceful mind, allowing for true spiritual enlightenment without artificial dependency.
  `,
  19: `
# Simplicity in Living: High Thinking, Simple Cooking

The Vedic ideal is "Simple Living, High Thinking." This applies directly to the kitchen.

### The Philosophy
Excessive complexity in cooking can often lead to pride or become a distraction from spiritual life. We aim for high-quality, delicious food through simplicity and pure ingredients.

### In the Kitchen
*   **Whole Foods**: relying on the natural flavors of high-quality ingredients.
*   **Efficient Methods**: Avoiding overly elaborate or modern high-tech processes that distance us from the food.

### Spiritual Benefits
Simplicity helps us remain humble and focus on the purpose of the food (nourishment and service) rather than the 'performance' of the cook.
  `,
  20: `
# Ayurvedic Balance: Harmonizing the Six Tastes

Ayurveda, the sister science to Yoga, teaches that a balanced meal should incorporate all six tastes to satisfy the body and mind.

### The Philosophy
The six tastes are: **Sweet, Sour, Salty, Pungent (spicy), Bitter, and Astringent**. When a meal is balanced across these tastes, we feel completely satisfied and don't experience cravings.

### In the Kitchen
*   **Spice Mixes**: using spices like cumin, ginger, turmeric, and coriander to hit multiple taste profiles.
*   **Variety**: ensuring the meal has a grain, a legume, a vegetable, and a small amount of something sweet and sour (like a chutney).

### Spiritual Benefits
A balanced body leads to a balanced mind. When the physical self is harmonized through Ayurveda, spiritual practices flow more naturally.
  `,
  21: `
# Environmental Stewardship: Sourcing with Respect

As devotees of Krishna, we recognize the Earth (Bhumi-Devi) as a sacred provider and treat her with respect.

### The Philosophy
Sustainability is not a modern trend but a Vedic value. We try to use resources wisely, minimize waste, and support agricultural practices that do not harm the soul of the soil.

### In the Kitchen
*   **Zero Waste**: Using vegetable scraps for compost or stock.
*   **Organic**: support local farmers who use natural, non-violent farming methods.

### Spiritual Benefits
Stewardship develops a sense of interconnectedness with all of God's creation. It fosters gratitude and a sense of being a part of a larger, sacred ecosystem.
  `,
  22: `
# Sound Vibration: The Invisible Ingredient

The atmosphere of the kitchen is shaped by sound. In a Krishna Conscious kitchen, we use spiritual sound to purify the space.

### The Philosophy
Everything in the material world is vibration. Chanting or playing kirtan (devotional music) clears the subtle environment and helps the cook maintain a devotional focus.

### In the Kitchen
*   **Mantra**: Chanting the 'Hare Krishna' mantra while cooking.
*   **Music**: Playing soft, devotional kirtan or lectures by spiritual teachers.

### Spiritual Benefits
Spiritual sound vibration purifies the room and the food itself. It makes the act of cooking feel like a continuous ceremony.
  `,
  23: `
# Service: The Joy of Feeding Others

Cooking in the Vedic tradition is always an act of service (Seva). One cooks with the intent to feed and nourish others.

### The Philosophy
Self-centered cooking (just for one's own belly) is considered restrictive. Preparing a feast to share with family, friends, or even strangers is a high form of spiritual activity.

### In the Kitchen
*   **Hospitality**: always being prepared to share a meal with a guest.
*   **Community**: Participating in large-scale food distribution (Anu-Daan).

### Spiritual Benefits
Feeding others is a powerful way to practice generosity and humility. It builds a strong, loving community based on spiritual shared values.
  `,
  24: `
# Genetic Integrity: Honoring Divine Seeds

In a modern world of GMOs and processed seeds, we make a conscious effort to favor natural, heirloom varieties.

### The Philosophy
The seeds created by nature are perfect gifts. Tinkering with the genetic structure of food is seen as a violation of the Lord's original design and can have unknown effects on consciousness and health.

### In the Kitchen
*   **Labels**: checking for Non-GMO certifications.
*   **Tradition**: favoring ancient grains and species over modern, highly engineered crops.

### Spiritual Benefits
Respecting the natural integrity of food aligns us with the will of the Creator and ensures that we are nourishing our bodies with 'clean' biological information.
  `,
  25: `
# Gratitude and Prayer: Recognition of the Source

Every meal begins with an acknowledgment that we are not the ultimate providers; we are the recipients of Divine grace.

### The Philosophy
Cultivating gratitude removes pride and entitlement. Recognizing that every grain of rice exists by the grace of the Divine makes the meal a sacred gift.

### In the Kitchen
*   **Opening Prayer**: a short moment of silence or a spoken prayer before starting the fire.
*   **Closing Gratitude**: thankfulness at the end of the cooking process.

### Spiritual Benefits
Gratitude is the highest vibration. It brings joy and contentment, making even a simple meal feel like a feast.
  `,
  26: `
# Mercy Distribution: The Importance of Prasadam

Sharing sanctified food is one of the most important aspects of the Krishna Conscious lifestyle.

### The Philosophy
*Prasadam* is considered spiritual medicine. Sharing it with others is an act of supreme mercy, as it helps cleanse the soul of those who partake.

### In the Kitchen
*   **Packaging**: keeping small portions of offered sweets or grains to give away to visitors.
*   **Feasting**: Organizing Sunday Feasts or community meals where everyone is welcome.

### Spiritual Benefits
Through mercy distribution, the cook becomes an instrument of divine grace, helping to uplift the entire community spiritually.
  `,
  27: `
# Universal Brotherhood: Compassion for All Souls

Our diet is a statement of our relationship with the world and all living beings.

### The Philosophy
We recognize that the 'soul' (Atma) resides in every living creature. Therefore, our kitchen is a place where no one is harmed, and everyone is potentially fed.

### In the Kitchen
*   **Inclusivity**: cooking food that respects the highest standards so it can be shared with anyone, regardless of background.
*   **Education**: sharing the philosophy of compassion with those who ask.

### Spiritual Benefits
This global perspective helps us overcome sectarianism and prejudice, seeing everyone as part of the same divine family.
  `,
  28: `
# Consistency in Devotion: The Daily Offering

Spiritual life is not a weekend activity; it is a daily commitment that centers around the kitchen.

### The Philosophy
The daily act of cooking and offering food creates a steady spiritual rhythm. It ensures that we are connected to the Divine multiple times a day through the simple act of eating.

### In the Kitchen
*   **Routine**: establishing a regular schedule for morning and evening offerings.
*   **Commitment**: maintaining high standards even on busy or challenging days.

### Spiritual Benefits
Consistency leads to deep spiritual realization. It turns the home into a sanctuary and the body into a well-tuned instrument for divine service.
  `,
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
    <div className="bg-spiritual-cream dark:bg-gray-950 min-h-screen text-primary font-sans pb-20 transition-colors">
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <Link 
          href="/principles" 
          className="inline-flex items-center text-forest-green dark:text-forest-green hover:text-deep-saffron transition-colors mb-8 font-semibold group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to principles
        </Link>

        <article className="bg-card-bg rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 mb-12 transition-colors">
          <div className="bg-forest-green text-white p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <span className="text-vedic-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 block relative z-10">
              Principle {currentId}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight relative z-10">
              {principleInfo.title}
            </h1>
            <div className="w-20 h-1 bg-deep-saffron mx-auto mt-8 rounded-full relative z-10"></div>
          </div>

          <div className="p-8 md:p-20 bg-card-bg transition-colors">
            <div className="prose prose-lg max-w-none 
              prose-headings:font-serif prose-headings:text-forest-green
              prose-h1:text-center prose-h1:mb-12
              prose-strong:text-forest-green prose-strong:font-bold
              prose-li:marker:text-deep-saffron
              prose-blockquote:border-deep-saffron prose-blockquote:bg-spiritual-cream/50 dark:prose-blockquote:bg-gray-800/50 prose-blockquote:py-1
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
              className="p-8 bg-card-bg rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-deep-saffron/30 transition-all group flex flex-col"
            >
              <span className="text-xs font-bold text-muted uppercase tracking-widest mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </span>
              <h4 className="text-xl font-serif text-forest-green dark:text-forest-green group-hover:text-deep-saffron transition-colors">
                {prevPrinciple.title}
              </h4>
            </Link>
          ) : <div />}

          {nextPrinciple ? (
            <Link 
              href={`/principles/${nextPrinciple.id}`}
              className="p-8 bg-card-bg rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-deep-saffron/30 transition-all group flex flex-col text-right items-end"
            >
              <span className="text-xs font-bold text-muted uppercase tracking-widest mb-2 flex items-center">
                Next
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <h4 className="text-xl font-serif text-forest-green dark:text-forest-green group-hover:text-deep-saffron transition-colors">
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
