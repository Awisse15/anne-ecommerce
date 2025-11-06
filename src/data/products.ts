export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Rose Bouquet",
    description: "A classic bouquet of fresh red roses, perfect for expressing love and passion.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "Sunflower Arrangement",
    description: "Brighten someone's day with a cheerful mix of golden sunflowers and greenery.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Tulip Delight",
    description: "A vibrant bouquet of mixed tulips — elegant, colorful, and full of joy.",
    price: 27.5,
    image: "https://images.unsplash.com/photo-1582738412300-6dfc9e1b67b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    name: "Lily Serenity",
    description: "Graceful white lilies symbolizing purity and peace. A timeless floral gift.",
    price: 32.0,
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "5",
    name: "Orchid Elegance",
    description: "Exquisite purple orchids in a modern vase — perfect for any special occasion.",
    price: 45.0,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
  },
];
