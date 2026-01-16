import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import ChatWidgetWrapper from "@/components/ChatWidgetWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crafted by Louisse",
  description: "A lovely online flower store built with Next.js 💐",
  icons: {
    icon: [
      { url: "/flower-logo.png", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <CartProvider>
          <Navbar />
          <main className="h-[calc(100vh-64px)] px-8 w-full">{children}</main>
        </CartProvider>
        
        <ChatWidgetWrapper />
      </body>
    </html>
  );
}