/*
  DESIGN: Warm Minimal — Product Card
  Soft rounded corners, subtle hover scale, pill-shaped badge, warm shadows
  CTA: "Check Price on Amazon" — leverages Amazon trust
*/

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";

const badgeColors: Record<string, string> = {
  Trending: "bg-amber-100 text-amber-800",
  "Best Seller": "bg-emerald-100 text-emerald-800",
  New: "bg-sky-100 text-sky-800",
  Deal: "bg-rose-100 text-rose-800",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.a
      href={product.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group block rounded-2xl bg-white overflow-hidden shadow-[0_1px_3px_rgba(60,36,21,0.06)] hover:shadow-[0_8px_30px_rgba(60,36,21,0.1)] transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#f5f3ef]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${badgeColors[product.badge] || "bg-gray-100 text-gray-700"}`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-[0.9375rem] leading-snug text-[#3C2415] mb-1.5 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[0.8125rem] text-[#A89F91] leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>
        {product.price && (
          <span className="text-sm font-semibold text-[#3C2415] mb-2 block">
            {product.price}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E07A4F] group-hover:text-[#c4663d] transition-colors">
          Check on Amazon
          <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </motion.a>
  );
}
