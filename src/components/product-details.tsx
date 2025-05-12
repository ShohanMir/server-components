import { Product } from "@/types/product.interface";
import Image from "next/image";

export default async function ProductDetailPage({ data }: { data: Product }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="border border-gray-300 p-4">
        <Image
          src={data.thumbnail}
          alt={data.title}
          width={500}
          height={500}
          className="rounded-xl"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <p className="text-2xl font-semibold mb-2">${data.price}</p>

        {data.discountPercentage && (
          <p className="text-sm text-green-600 line-through">
            ${(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}{" "}
            (before discount)
          </p>
        )}
      </div>
    </div>
  );
}
