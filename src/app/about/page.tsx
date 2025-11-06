"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const cards = [
    {
      title: "About Us",
      text: "Welcome to Crafted by Louisse! I am passionate about brightening your day with handcrafted floral arrangements that make every moment special.",
      image: "/logo.png",
      alt: "Flower arrangement",
    },
    {
      title: "Our Mission",
      text: "To craft beautiful, hand-picked floral arrangements that bring joy and warmth to every home, celebration, and occasion.",
      image: "/about-flowers-1.png",
      alt: "Mission flowers",
    },
    {
      title: "Meet the Owner",
      text: "I started Crafted by Louisse to share my love for flowers with the world. Every arrangement is carefully crafted to bring a smile to your face.",
      image: "/owner.png",
      alt: "Owner Anne Louisse",
    },
  ];

  return (
    <main className="w-full h-screen flex items-center justify-center bg-pink-50 px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full aspect-square relative mb-4">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-pink-600 mb-2">{card.title}</h2>
            <p className="text-gray-700 text-md text-justify">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
