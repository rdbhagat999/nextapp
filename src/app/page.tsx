import { useSearchParams } from "next/navigation";

import ProductCard from "@/components/Product";
import SearchForm from "@/components/SearchForm";
import { API_ROOT, APP_ROOT, TOKEN } from "@/utils/env";
import { IProduct } from "@/utils/types";

export const revalidate = 3600; // revalidate every hour

async function getProducts(query: string, page: string) {
  // This request should be cached until manually invalidated.
  // `force-cache` is similar to `getStaticProps`.
  // `no-store` is similar to `getServerSideProps`.
  // `force-cache` is the default and can be omitted.
  // const url = new URL(APP_ROOT);
  // const query = url?.searchParams?.get("q") || "";
  // const page = url?.searchParams?.get("page") || "1";
  const limit = "15";
  const filter = query.length
    ? `&filter[name][_contains]=${encodeURIComponent(query)}`
    : "";

  const offset = (parseInt(page, 10) - 1) * parseInt(limit, 10);
  const reqUrl = `${API_ROOT}/items/products?access_token=${TOKEN}&q=${query}&page=${page}&offset=${offset}&limit=${limit}${filter}`;

  const response = await fetch(reqUrl, {
    cache: "force-cache",
    // next: { revalidate: 3600 },
  });

  // Recommendation: handle errors
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const items: any = await response.json();
  const products_list = items?.data as IProduct[];
  const products =
    products_list.map((p: IProduct) => ({
      ...p,
      thumbnail: `${API_ROOT}/assets/${p?.thumbnail}?access_token=${TOKEN}`,
    })) || [];

  return products;
}

export default async function Home({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  const query = (searchParams && searchParams["q"]) || "";
  const page = (searchParams && searchParams["page"]) || "1";

  const products = await getProducts(query, page);

  return (
    <main className="text-center mx-auto text-gray-700 p-4">
      <section>
        <SearchForm query={query || ""} />

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 mt-5 gap-2">
          {products?.map((product) => (
            <li key={product?.id} className="text-left">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
