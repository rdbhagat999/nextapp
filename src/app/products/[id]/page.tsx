import { Suspense } from "react";
import Image from "next/image";
import { getProducts, getProduct } from "@/lib/product_lib";
import { IProduct } from "@/utils/types";
import Loading from "./loading";

export const dynamicParams = true;
export const revalidate = 36000; // revalidate this page every 36000 seconds

export async function generateStaticParams() {
  const { products } = await getProducts();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// export async function generateMetadata({ params: { id }}: {
//   params: { id: string };
// }) {
//   // The head.js special file will be deprecated in 13.2 and removed in a future version.
//   // For /products/123, params.id is "123"
//   // For /products/123?foo=bar, searchParams.get("foo") is "bar"
//   // The return value is the metadata object
//   const product: IProduct = await getProduct(id);
//   return { title: product?.name, description: product?.description }
// }

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  // starting loading the product data now
  const product: IProduct = await getProduct(id);

  const labels = [
    "price",
    "quantity",
    "sku",
    "status",
    "type",
    "vendor",
  ] as const;

  return (
    <>
      <article className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <Suspense fallback={<Loading />}>
          <Image
            src={product?.thumbnail}
            alt={product?.name}
            width={500}
            height={500}
            loading="eager"
            fetch-priority="high"
            className="w-full object-cover h-90"
          />
        </Suspense>
        <section>
          <Suspense fallback={<Loading />}>
            <h1 className="text-5xl font-bold">{product?.name}</h1>
            <p className="text-3xl font-italic mt-5">{product?.description}</p>

            <ul className="grid grid-cols-2 mt-5 mb-5 text-3xl">
              {labels?.map((label: string) => (
                <li
                  key={label}
                  className="mt-3">
                  <p className="font-bold">{label}</p>
                  <p>
                    {label == "price"
                      ? "$" + (product as any)[label]
                      : (product as any)[label]}
                  </p>
                </li>
              ))}
            </ul>
          </Suspense>
        </section>
      </article>
    </>
  );
}
