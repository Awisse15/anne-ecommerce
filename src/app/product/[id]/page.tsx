import { products } from "@/data/products";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // ✅ Unwrap the params Promise first
  const { id } = await params;

  // Find the product with this ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-6 text-red-600">Product not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-xl shadow-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold text-blue-600">${product.price}</p>
    </div>
  );
}
