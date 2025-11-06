"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { totalQuantity } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Explicitly map display names to routes
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Shop", href: "/shop" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-md fixed top-0 left-0 z-50"
    >
      <div className="w-full px-10 py-3 flex items-center justify-between">
        {/* 🌸 Logo + Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-pink-600"
        >
          <Image
            src="/flower-logo.png"
            alt="AnneBlooms Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          Crafted by Louisse
        </Link>

        {/* 🌼 Links + Cart */}
        <div className="flex items-center gap-18">
          <div className="hidden sm:flex items-center gap-5 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <motion.div whileHover={{ scale: 1.1 }} key={link.name}>
                <Link href={link.href} className="hover:text-pink-600 transition">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* 🛒 Cart */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/cart"
              className="flex items-center gap-2 text-gray-700 hover:text-pink-600"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="text-sm font-medium">{mounted ? totalQuantity : 0}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
