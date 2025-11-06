"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
      {/* Category Tabs */}
      <div className="flex gap-6 border-b border-gray-300 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-2 text-lg font-medium hover:text-pink-600 transition ${
              activeCategory === cat ? "border-b-2 border-pink-600 text-pink-600" : ""
            }`}
          >
            {cat
              .split("-")
              .map((w) => w[0].toUpperCase() + w.slice(1))
              .join(" ")}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products[activeCategory].map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-full h-56">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-pink-600">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-gray-800">${product.price}</span>
                <button
                  onClick={() => addToCart(product, 1)}
                  className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
