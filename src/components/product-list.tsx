import Image from "next/image";
import { Product } from "@/types/product.interface";
import LikeButton from "@/components/like-button";
import Link from "next/link";

export default function ProductList({
  data,
  desc,
  path,
}: {
  data: Product[];
  desc: string;
  path: string;
}) {
  return (
    <main className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4 text-center">All Products</h1>

        <p className="text-gray-600 text-center">
          List of all products in {desc}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <Link key={product.id} href={`/${path}/${product.id}`}>
            <div
              key={product.id}
              className="cursor-pointer bg-gray-600/20 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <h2 className="my-2 text-lg font-semibold leading-tight">
                {product.title}
              </h2>
              <p className="text-gray-200 text-sm">{product.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-gray-200 font-bold">
                  ${product.price}
                </span>
                {product.discountPercentage && (
                  <span className="text-green-300 text-xs line-through">
                    $(
                    {(
                      product.price /
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                    )
                  </span>
                )}
              </div>
              <div className="mt-2 flex items-center justify-between">
                {product.thumbnail && (
                  <Image
                    width={200}
                    height={200}
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-1/2 rounded-md"
                  />
                )}
              </div>
              {/* Client component */}
              <LikeButton />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
