import { cn } from "../utils";
import { useProductContext } from "./product-card-context";

import NoImage from "../assets/no-image.jpg";

export interface ProductImageProps {
  image?: string;
  className?: string;
}
export const ProductImage = ({ image, className }: ProductImageProps) => {
  const { product } = useProductContext("ProductImage");

  const imageToShow = image ? image : product.image ?? NoImage;

  return (
    <img
      className={cn("w-full", className)}
      src={imageToShow}
      alt="Product image"
    />
  );
};
