/*
  DESIGN: Warm Minimal — Category Tabs
  Pill-shaped tabs, horizontal scroll on mobile
  Sticky below header for easy navigation
*/

import { motion } from "framer-motion";
import type { Category } from "@/data/products";

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryChange: (id: string | null) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="sticky top-0 z-30 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#3C2415]/5 py-3">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {/* All tab */}
          <button
            onClick={() => onCategoryChange(null)}
            className={`relative shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === null
                ? "text-white"
                : "text-[#3C2415]/70 hover:text-[#3C2415] hover:bg-[#3C2415]/5"
            }`}
          >
            {activeCategory === null && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[#3C2415] rounded-full"
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">All</span>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`relative shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "text-white"
                  : "text-[#3C2415]/70 hover:text-[#3C2415] hover:bg-[#3C2415]/5"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#3C2415] rounded-full"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">
                {cat.emoji} {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
