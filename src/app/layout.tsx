import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crafted by Louisse",
  description: "A lovely online flower store built with Next.js 💐",
  icons: {
    icon: [
      { url: "/flower-logo.png", type: "image/x-icon" }, // favicon for tab
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <CartProvider>
          <Navbar />       {/* ✅ Only here */}
          <main className="h-[calc(100vh-64px)] px-8 w-full">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}

