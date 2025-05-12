"use client";

import Loader from "@/components/loader";
import ProductDetailPage from "@/components/product-details";
import ProductReviewsClient from "@/components/product-review-client";
import { Product } from "@/types/product.interface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    }

    if (id) fetchProduct();
  }, [id]);

  return (
    <>
      <main className="container mx-auto py-10 space-y-10">
        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
        {/* Server Component - loads first */}
        {loading ? (
          <Loader />
        ) : product ? (
          <ProductDetailPage data={product} />
        ) : (
          <p>Loading product data...</p>
        )}

        {/* Streaming/Suspense Review Section */}

        <ProductReviewsClient />
      </main>
    </>
  );
}
