import { type ReactNode } from "react";

import { cn } from "../utils";
import { ProductContext } from "./product-card-context";
import { useProduct } from "../hooks/useProduct";
import type { Product } from "../interfaces/product.interface";
import type {
  InitialValues,
  ProductCardHandlers,
} from "../interfaces/product-card.interface";

export interface ProductCardProps {
  children: (args: ProductCardHandlers) => ReactNode;
  product: Product;
  className?: string;
  initialValues?: InitialValues;
}
export const ProductCard = ({
  children,
  product,
  className,
  initialValues,
}: ProductCardProps) => {
  const { count, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct(initialValues);

  return (
    <ProductContext value={{ product, count, increaseBy, maxCount }}>
      <div
        className={cn(
          "bg-zinc-800 text-white w-64 m-1.5 pb-1.5 rounded-xl overflow-hidden flex flex-col shadow-md",
          className
        )}
      >
        {children({
          count,
          isMaxCountReached,
          maxCount,
          product,

          increaseBy,
          reset,
        })}
      </div>
    </ProductContext>
  );
};
