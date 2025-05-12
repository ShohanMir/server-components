// app/product/[id]/page.tsx
import ProductDetailPage from "@/components/product-details";
import ProductReviews from "@/components/product-review";
import { Suspense } from "react";

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 }, // revalidate every 60 seconds
  });
  const product = await res.json();

  return (
    <>
      <main className="container mx-auto py-10 space-y-10">
        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
        {/* Server Component - loads first */}
        <ProductDetailPage data={product} />

        {/* Streaming/Suspense Review Section */}
        <Suspense
          fallback={
            <p className="text-gray-400 text-center">Loading reviews...</p>
          }
        >
          <ProductReviews />
        </Suspense>
      </main>
    </>
  );
}
