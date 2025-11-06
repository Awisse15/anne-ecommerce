"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Your Cart is Empty 🌸</h1>
        <p className="text-gray-600 mb-6">
          Looks like you haven’t added any flowers yet.
        </p>
        <Link
          href="/"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl text-sm font-medium"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">🛒 Your Cart</h1>

      <div className="space-y-6">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-xl"
              />
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-3 sm:mt-0">
              <button
                onClick={() => updateQuantity(product.id, Math.max(1, quantity - 1))}
                className="bg-pink-100 hover:bg-pink-200 px-2 rounded"
              >
                -
              </button>
              <span className="text-gray-800">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="bg-pink-100 hover:bg-pink-200 px-2 rounded"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:text-red-600 text-sm ml-3"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <h2 className="text-2xl font-semibold mb-2">
          Total: <span className="text-pink-600">${totalPrice.toFixed(2)}</span>
        </h2>

        <div className="flex justify-end gap-3">
          <button
            onClick={clearCart}
            className="border border-pink-400 text-pink-500 hover:bg-pink-50 px-5 py-2 rounded-xl text-sm"
          >
            Clear Cart
          </button>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl text-sm font-medium">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
