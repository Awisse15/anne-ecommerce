import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import Script from "next/script";
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

        <Script id="papercups-config" strategy="afterInteractive">
          {`
            window.Papercups = {
              config: {
                token: "2a33ce6d-53fb-4c25-b9f6-3978ea9aedd5",
                inbox: "cbcad038-825f-4da5-a2d4-4f7740063589",
                title: "Welcome to Crafted by Louisse",
                subtitle: "Ask us anything about our flowers! 💐",
                primaryColor: "#f78da7",
                newMessagePlaceholder: "Start typing...",
                showAgentAvailability: false,
                requireEmailUpfront: false,
                baseUrl: "https://papercups-latest-yob9.onrender.com"
              },
            };
          `}
        </Script>
        <Script
          src="https://papercups-latest-yob9.onrender.com/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}