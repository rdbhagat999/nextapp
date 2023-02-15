"use client";

import { useCartStore } from "@/lib/product_store";

export default function CartTotal() {
  return <div>Cart Total: ${useCartStore().cartTotal}</div>;
}
