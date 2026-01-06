import { createContext, use } from "react";

import type { Product } from "../interfaces/product.interface";

interface ProductContextProps {
  product: Product;
  count: number;
  maxCount?: number;
  increaseBy: (value: number) => void;
}

export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const useProductContext = (componentName: string) => {
  const context = use(ProductContext);
  if (!context) {
    throw new Error(`${componentName} must be used within <ProductCard />`);
  }
  return context;
};
