import { IProduct } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  product,
  showImg = false,
}: {
  product: IProduct;
  showImg?: boolean;
}) {
  return (
    <article className="rounded-xl border-2 border-gray-100 p-5">
      <h2 className="text-2xl font-bold mb-2">{product?.name}</h2>
      <p className="text-sm text-gray-500 font-medium mb-1">
        Sku: {product?.sku}
      </p>
      <p className="text-sm text-gray-500 font-medium mb-1">
        Type: {product?.type}
      </p>
      <p className="text-sm text-gray-500 font-medium mb-1">
        Vendor: {product?.vendor}
      </p>
      {showImg && (
        <Image
          src={product?.thumbnail}
          className="product-image"
          alt={product?.name}
          loading="eager"
        />
      )}
      <div className="mt-5 flex">
        <Link
          className="underline flex-grow"
          href={`/products/${product?.id}`}
          rel="noopener noreferrer"
        >
          View Details...
        </Link>
        <p className="text-green-600 font-semibold mb-2">${product?.price}</p>
      </div>
    </article>
  );
}
