import "server-only";
import { API_ROOT, TOKEN } from "@/utils/env";
import { IProduct } from "@/utils/types";

export const getProducts = async (query: string = "", page: string = "1") => {
  const limit = "20";
  const filter = query.length
    ? `&filter[name][_contains]=${encodeURIComponent(query)}`
    : "";

  const offset = (parseInt(page, 10) - 1) * parseInt(limit, 10);
  const reqUrl = `${API_ROOT}/items/products?access_token=${TOKEN}&q=${query}&page=${page}&offset=${offset}&limit=${limit}${filter}`;

  // revalidate this page every 36000 seconds, since the getData's fetch
  // request has `revalidate: 36000`.
  const response = await fetch(reqUrl, { next: { revalidate: 36000 } });

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

  return { products, query };
};

export const preload = (id: string) => {
  void getProduct(id);
};

export const getProduct = async (id: string) => {
  // revalidate this page every 36000 seconds, since the getData's fetch
  // request has `revalidate: 36000`.
  const response = await fetch(
    `${API_ROOT}/items/products/${id}?access_token=${TOKEN}`,
    { next: { revalidate: 36000 } }
  );
  const respBody: any = await response.json();
  const productData = respBody?.data as IProduct;

  const product = {
    ...productData,
    thumbnail: `${API_ROOT}/assets/${productData?.thumbnail}?access_token=${TOKEN}`,
  } as IProduct;

  // console.log("server", product);

  return product;
};
