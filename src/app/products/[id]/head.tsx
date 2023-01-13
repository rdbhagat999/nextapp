import DefaultTags from "@/app/DefaultTags";
import SeoElement from "@/components/SeoElement";
import { API_ROOT, APP_ROOT, TOKEN } from "@/utils/env";
import { IProduct } from "@/utils/types";

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

export default async function Head({ params }: { params: { id: string } }) {
  const url = new URL(`${APP_ROOT}/products/${params?.id}`);
  const product = await getProduct(params?.id);

  return (
    <>
      <DefaultTags />
      <title>{product?.name}</title>
      <SeoElement
        url={url}
        title={product?.name}
        description={product?.description}
        image={product?.thumbnail}
      />
    </>
  );
}
