"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h2>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-pink-600 font-bold">
            ${product.price.toFixed(2)}
          </span>

          <div className="flex gap-2">
            <Link
              href={`/product/${product.id}`}
              className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg text-sm font-medium"
            >
              View
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="text-pink-600 border border-pink-500 hover:bg-pink-50 px-3 py-2 rounded-lg text-sm font-medium"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
