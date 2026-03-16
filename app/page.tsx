import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DailyInspiration from "@/components/DailyInspiration";
import Principles from "@/components/Principles";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import IngredientsSpotlight from "@/components/IngredientsSpotlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-spiritual-cream text-gray-800 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <DailyInspiration />
        <Principles />
        <FeaturedRecipes />
        <IngredientsSpotlight />
      </main>
      <Footer />
    </div>
  );
}
