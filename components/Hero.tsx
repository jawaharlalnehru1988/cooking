export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-end pb-16 md:pb-0 md:items-center overflow-hidden">
      {/* Hero Background Image */}
      <img
        alt="Beautifully offered Krishna Prasadam"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj1U4xMahrcWRhkllIEzOIRULramCJyJnZSXYl0lFYMrr4wifiQ6rpQcgmIlYYY0vsW7PFCFKRESlDGcb_2H9hEhGEHKHIOzPsuny1ondKyAhD_xvhXPpbnYtpyX60b-RwjRDPn30niMsjvA5n1I95t3d6fbfSCdk36xotS4qJ5bgJxOsjRyTB5AfeqWACySRJ0wP1Oe_g2c4Nr0r3DqiQfOfijCxJZT3u7rz-Wb58ofEdz2fZViOcHyouSzMzu0pIAohEyBqSFOY"
      />
      <div className="absolute inset-0 hero-gradient dark:opacity-90 dark:bg-black/40"></div>
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 bg-deep-saffron text-xs font-bold uppercase tracking-widest mb-4">
            Divine Flavors
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Sattiv Cooking: Pure Devotion
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Discover the ancient art of Sattvic cooking. Transform your kitchen into a sacred
            space and every meal into a divine offering.
          </p>
          <div className="flex space-x-4">
            <a
              className="bg-deep-saffron hover:bg-orange-600 px-8 py-3 rounded-md font-bold transition-all inline-block"
              href="#"
            >
              Explore Recipes
            </a>
            <a
              className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm px-8 py-3 rounded-md font-bold transition-all inline-block"
              href="#"
            >
              Learn Philosophy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
