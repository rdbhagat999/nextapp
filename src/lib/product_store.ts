import { create } from "zustand";
import { IProduct } from "@/utils/types";

type cartItem = { quantity: number; product: IProduct };

export interface ICart {
  cart: cartItem[];
  cartTotal: number;
  products: IProduct[];
  query: string;
  addItem: (item: IProduct) => void;
  deleteItem: (id: string) => void;
}

export const useCartStore = create<ICart>((set, get) => ({
  cart: [],
  cartTotal: 0,
  products: [],
  query: "",
  addItem: (p: IProduct) =>
    set((state: ICart) => {
      const found = get().cart.find((item) => item.product.id === p.id);

      if (found) {
        state.cart = get().cart.map((item) => {
          if (item.product.id == p.id) {
            item.quantity += 1;
          }
          return item;
        });
      } else {
        state.cart = [...state.cart, { product: { ...p }, quantity: 1 }];
      }

      const cartTotal = get().cart.reduce((sum, item, index) => {
        return sum + item.product.price * item.quantity;
      }, 0);

      return { ...state, cartTotal };
    }),
  deleteItem: (id: IProduct["id"]) =>
    set((state: ICart) => {
      const cart = get().cart.filter((item) => item.product.id != id);

      return { ...state, cart };
    }),
}));
