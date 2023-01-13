import DefaultTags from "@/app/DefaultTags";
import SeoElement from "@/components/SeoElement";
import { getProduct } from "@/lib/product_lib";
import { APP_ROOT } from "@/utils/env";

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
