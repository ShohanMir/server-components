import ProductList from "@/components/product-list";

export default async function ProductPage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <>
      <ProductList data={data.products} desc="Server Component" />
    </>
  );
}
