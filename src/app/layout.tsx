import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import type { Metadata } from "next";
import Script from "next/script";

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
        
        {/* Papercups Chat Widget */}
        <Script id="papercups-config" strategy="afterInteractive">
          {`
            window.Papercups = {
              config: {
                accountId: "YOUR_ACCOUNT_ID",
                title: "Need help?",
                subtitle: "Ask us anything about our flowers!",
                baseUrl: "YOUR_BACKEND_URL",
                primaryColor: "#10b981"
              }
            };
          `}
        </Script>
        <Script 
          src="YOUR_BACKEND_URL/widget.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}