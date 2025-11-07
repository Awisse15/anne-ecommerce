"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

type Category = "single-bouquet" | "clips" | "bouquet" | "others";

const products: Record<Category, Product[]> = {
  "single-bouquet": Array.from({ length: 9 }, (_, i) => ({
    id: `single-bouquet-${i + 1}`,
    name: `Single Bouquet ${i + 1}`,
    description: "Fresh bouquet to brighten anyone's day 🌸",
    price: 25 + i,
    image: "/flower-1.png",
  })),
  clips: Array.from({ length: 12 }, (_, i) => ({
    id: `clip-${i + 1}`,
    name: `Clip ${i + 1}`,
    description: "Cute clip to add charm 🌼",
    price: 5 + i,
    image: "/flower-2.png",
  })),
  bouquet: Array.from({ length: 9 }, (_, i) => ({
    id: `bouquet-${i + 1}`,
    name: `Bouquet ${i + 1}`,
    description: "Beautiful bouquet for gifting 💐",
    price: 40 + i,
    image: "/flower-3.png",
  })),
  others: Array.from({ length: 2 }, (_, i) => ({
    id: `other-${i + 1}`,
    name: `Other Product ${i + 1}`,
    description: "Special item for unique occasions 🌷",
    price: 15 + i,
    image: "/flower-4.png",
  })),
};

export default function ShopPage() {
  const categories: Category[] = ["single-bouquet", "clips", "bouquet", "others"];
  const [activeCategory, setActiveCategory] = useState<Category>("single-bouquet");
  const { addToCart } = useCart();

  return (
    <main className="pt-28 px-8 max-w-7xl mx-auto pb-16">
      {/* 🩷 Category Tabs */}
      <div className="flex gap-8 border-b border-gray-300 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-3 text-lg font-semibold transition relative ${
              activeCategory === cat
                ? "text-pink-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-pink-600"
                : "text-gray-600 hover:text-pink-600"
            }`}
          >
            {cat
              .split("-")
              .map((w) => w[0].toUpperCase() + w.slice(1))
              .join(" ")}
          </button>
        ))}
      </div>

      {/* 🌼 Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products[activeCategory].map((product) => (
          <motion.div
            key={product.id}
            className="bg-pink-50 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-pink-200 transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.02 }}
          >
            {/* 🖼️ Product Image */}
            <div className="relative w-full h-72">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* 📦 Product Info */}
            <div className="p-5 flex flex-col justify-between flex-1">
              {/* Name + Desc */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm text-justify">
                  {product.description}
                </p>
              </div>

              {/* Price + Cart */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-pink-600 font-bold text-lg">
                  ${product.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  onClick={() => addToCart(product, 1)}
                  className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition"
                  aria-label="Add to cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
