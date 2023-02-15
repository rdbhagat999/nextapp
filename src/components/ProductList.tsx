import ProductCard from "./Product";
import { useCartStore } from "@/lib/product_store";

export default function ProductList() {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 mt-5 gap-2">
      {useCartStore.getState().products?.map((product) => (
        <li
          key={product?.id}
          className="text-left">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
