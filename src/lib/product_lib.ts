import "server-only";

import { API_ROOT, TOKEN } from "@/utils/env";
import { IProduct } from "@/utils/types";

export async function getProducts(query: string = "", page: string = "1") {
  const limit = "50";
  const filter = query.length
    ? `&filter[name][_contains]=${encodeURIComponent(query)}`
    : "";

  const offset = (parseInt(page, 10) - 1) * parseInt(limit, 10);
  const reqUrl = `${API_ROOT}/items/products?access_token=${TOKEN}&q=${query}&page=${page}&offset=${offset}&limit=${limit}${filter}`;

  const response = await fetch(reqUrl);

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
}

export async function getProduct(id: string) {
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
