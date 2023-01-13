import { API_ROOT, TOKEN } from "@/utils/env";
import { IProduct } from "@/utils/types";
import Image from "next/image";

async function getProduct(id: string) {
  const response = await fetch(
    `${API_ROOT}/items/products/${id}?access_token=${TOKEN}`
  );
  const respBody: any = await response.json();
  const productData = respBody?.data as IProduct;

  const product = {
    ...productData,
    thumbnail: `${API_ROOT}/assets/${productData?.thumbnail}?access_token=${TOKEN}`,
  } as IProduct;

  // console.log("server", product);

  return product;
}

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
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
        <Image
          src={product?.thumbnail}
          alt={product?.name}
          width={500}
          height={500}
          className="w-full object-cover h-90"
        />
        <section>
          <h1 className="text-5xl font-bold">{product?.name}</h1>
          <p className="text-3xl font-italic mt-5">{product?.description}</p>

          <ul className="grid grid-cols-2 mt-5 mb-5 text-3xl">
            {labels?.map((label: string) => (
              <li key={label} className="mt-3">
                <p className="font-bold">{label}</p>
                <p>
                  {label == "price"
                    ? "$" + (product as any)[label]
                    : (product as any)[label]}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
