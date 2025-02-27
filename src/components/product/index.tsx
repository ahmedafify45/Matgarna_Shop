import { getCurrentLocale } from "@/lib/getCurrentLocale";

import { ProductWithRelations } from "@/types/product";
import getTrans from "@/lib/translation";
import ProductItem from "./ProductItem";

async function Product({ items }: { items: ProductWithRelations[] }) {
  const locale = await getCurrentLocale();
  const { noProductsFound } = await getTrans(locale);
  return items.length > 0 ? (
    <ul className="flex flex-wrap justify-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  ) : (
    <p className="text-accent text-center">{noProductsFound}</p>
  );
}

export default Product;
