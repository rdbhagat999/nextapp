import { Suspense } from "react";
import Loading from "./loading";
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
      <Link
        className="flex-grow no-underline"
        href={`/products/${product?.id}`}
        rel="noopener noreferrer">
        <Suspense fallback={<Loading />}>
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
        </Suspense>

        {showImg && (
          <Suspense fallback={<Loading />}>
            <Image
              src={product?.thumbnail}
              className="product-image"
              alt={product?.name}
              loading="eager"
              priority={true}
              fill={true}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
              placeholder="blur"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Suspense>
        )}

        <Suspense fallback={<Loading />}>
          <div className="mt-5 flex">
            {/* <Link
          className="underline flex-grow"
          href={`/products/${product?.id}`}
          rel="noopener noreferrer"
        >
          View Details...
        </Link> */}
            <p className="text-green-600 font-semibold mb-2">
              ${product?.price}
            </p>
          </div>
        </Suspense>
      </Link>
    </article>
  );
}
