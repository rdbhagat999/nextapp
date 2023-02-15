"use client";

import { IProduct } from "@/utils/types";
import { useCartStore } from "@/lib/product_store";

export default function AddToCart({ product }: { product: IProduct }) {
  const addItem = useCartStore.getState().addItem;

  return (
    <button
      onClick={() => addItem(product)}
      type="button"
      className="inline-flex items-center mt-1 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 px-10">
      Add To Cart
    </button>
  );
}
