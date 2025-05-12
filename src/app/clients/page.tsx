"use client";

import Loader from "@/components/loader";
import ProductList from "@/components/product-list";
import { useEffect, useState } from "react";

export default function ProductsClientPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ProductList data={products} desc="Client Component" path="clients" />
      )}
    </>
  );
}
