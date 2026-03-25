export default function DailyInspiration() {
  return (
    <section className="bg-vedic-gold/10 py-16 border-y border-vedic-gold/20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-deep-saffron font-bold tracking-[0.2em] mb-6 uppercase text-sm">
            Daily Inspiration
          </h3>
          <blockquote className="scripture-quote text-2xl md:text-3xl font-serif text-forest-green mb-4">
            "If one offers Me with love and devotion a leaf, a flower, fruit or water, I will accept
            it."
          </blockquote>
          <cite className="text-muted font-medium">— Bhagavad Gita 9.26</cite>
        </div>
      </div>
    </section>
  );
}
