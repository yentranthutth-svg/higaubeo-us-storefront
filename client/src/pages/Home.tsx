/*
  DESIGN: Warm Minimal — Home Page
  Single-page storefront: Hero → Category Tabs → Product Sections → Footer
  Mobile-first, max-width constraint for readability
  AIDA structure: Attention (Hero) → Interest (Tabs) → Desire (Products) → Action (CTAs + Footer)
*/

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = useMemo(() => {
    if (activeCategory === null) return categories;
    return categories.filter((c) => c.id === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Section — Attention */}
      <HeroSection />

      {/* Category Tabs — Interest */}
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Product Sections — Desire */}
      <main className="max-w-3xl mx-auto px-4 pt-8 sm:pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory || "all"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filteredCategories.map((category, index) => (
              <CategorySection
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer — Action + Trust */}
      <Footer />
    </div>
  );
}
