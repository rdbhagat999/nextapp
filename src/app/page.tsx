import ProductCard from "@/components/Product";
import SearchForm from "@/components/SearchForm";
import { getProducts } from "@/lib/product_lib";

export const dynamic = "force-dynamic";

export default async function Home({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  const q = (searchParams && searchParams["q"]) || "";
  const page = (searchParams && searchParams["page"]) || "1";
  const { products, query } = await getProducts(q, page);

  return (
      <section>
        <SearchForm query={query} />

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 mt-5 gap-2">
          {products?.map((product) => (
            <li key={product?.id} className="text-left">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
  );
}
