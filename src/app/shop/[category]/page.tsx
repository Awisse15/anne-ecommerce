"use client";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const categoryParam = params?.category;
  const category =
    Array.isArray(categoryParam) ? categoryParam[0] : categoryParam ?? "unknown";

  return (
    <main className="w-full min-h-screen px-8 py-16 bg-pink-50">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">
        {category.replace("-", " ")}
      </h1>

      <p>Here you can show products for the {category} category.</p>

      {/* TODO: map products for this category */}
    </main>
  );
}
