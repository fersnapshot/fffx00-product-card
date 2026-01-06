import { cn } from "../utils";
import { useProductContext } from "./product-card-context";

export interface ProductTitleProps {
  title?: string;
  className?: string;
}
export const ProductTitle = ({ title, className }: ProductTitleProps) => {
  const { product } = useProductContext("ProductTitle");

  const titleToShow = title ? title : product.title;

  return <span className={cn("m-2.5", className)}>{titleToShow}</span>;
};
