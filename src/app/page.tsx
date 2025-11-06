"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="h-[calc(100vh-64px)] w-full flex items-center justify-center px-8 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8 h-full">
        {/* Left Side — Text + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center text-center md:text-left gap-4"
        >
          {/* 🌸 Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 leading-tight mt-9">
            Brighten Your Day with <br /> Fresh, Handcrafted Blooms!
          </h1>

          {/* 🌼 Paragraph */}
          <p className="text-gray-600 text-lg md:text-xl max-w-md">
            Discover the beauty of flowers — perfect for every celebration, from sweet surprises to grand gestures.
          </p>

          {/* 🌸 Button */}
          <Link
            href="/shop"
            className="inline-block self-start bg-pink-600 text-white px-8 py-2 rounded-full text-lg font-medium hover:bg-pink-700 transition mt-11"
          >
            Shop Now
          </Link>
        </motion.div>

        {/* Right Side — Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            src="/flower-1.png"
            alt="Beautiful Flower Arrangement"
            width={600}
            height={500}
            className="rounded-2xl shadow-lg object-contain max-h-[70vh] transform translate-y-10"
          />
        </motion.div>
      </div>
    </main>
  );
}
