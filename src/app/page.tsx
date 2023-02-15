import { Suspense } from "react";
import Loading from "../components/loading";
import SearchForm from "@/components/SearchForm";
import { getProducts } from "@/lib/product_lib";
import { useCartStore } from "@/lib/product_store";
import ProductList from "@/components/ProductList";

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

  useCartStore.setState({
    products,
    query,
  });

  return (
    <section className="text-center">
      <Suspense fallback={<Loading />}>
        <SearchForm query={query} />
      </Suspense>

      <ProductList />
    </section>
  );
}
