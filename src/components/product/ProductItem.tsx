import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import AddToCartButton from "./add-to-cart-button";
import { ProductWithRelations } from "@/types/product";

function ProductItem({ item }: { item: ProductWithRelations }) {
  return (
    <li
      className="w-[23%] min-w-[250px] py-[10px] px-[12px] border border-solid border-gray-200
                 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300
                 flex flex-col justify-between h-full"
    >
      <div className="relative w-48 h-48 mx-auto rounded-lg overflow-hidden">
        <Image
          src={item.image}
          alt={`Image of ${item.name}`}
          className="object-cover w-full h-full"
          fill
          priority
        />
      </div>
      <h4 className="font-semibold text-xl my-3">{item.name}</h4>
      <strong className="text-primary mb-3 ">
        {formatCurrency(item.basePrice)}
      </strong>
      <p className="text-gray-500 text-sm flex-grow line-clamp-3 min-h-[50px]">
        {item.description}
      </p>
      <div className="flex justify-end mb-1">
        <AddToCartButton item={item} />
      </div>
    </li>
  );
}

export default ProductItem;
