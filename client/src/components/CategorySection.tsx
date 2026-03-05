/*
  DESIGN: Warm Minimal — Category Section
  Each category has a hero image banner + product grid below
  Generous whitespace between sections (64-80px)
*/

import { motion } from "framer-motion";
import type { Category } from "@/data/products";
import ProductCard from "./ProductCard";

export default function CategorySection({ category, index }: { category: Category; index: number }) {
  return (
    <section className="mb-16 sm:mb-20" id={category.id}>
      {/* Category Hero Image */}
      <motion.div
        className="relative rounded-2xl overflow-hidden mb-6 aspect-[16/9] sm:aspect-[2.4/1]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <img
          src={category.heroImage}
          alt={category.name}
          loading={index === 0 ? "eager" : "lazy"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5 sm:p-8">
          <span className="text-2xl mb-1 block">{category.emoji}</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {category.name}
          </h2>
        </div>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
