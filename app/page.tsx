import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DailyInspiration from "@/components/DailyInspiration";
import Principles from "@/components/Principles";
import CategorySection from "@/components/CategorySection";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import IngredientsSpotlight from "@/components/IngredientsSpotlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-spiritual-cream dark:bg-gray-950 text-gray-800 dark:text-gray-200 font-sans antialiased transition-colors">
      <Header />
      <main>
        <Hero />
        <DailyInspiration />
        <Principles />
        <CategorySection />
        <FeaturedRecipes />
        <IngredientsSpotlight />
      </main>
      <Footer />
    </div>
  );
}
