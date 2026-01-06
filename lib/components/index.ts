import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

// type ProductCardCompound = typeof ProductCardHOC & {
//   Title: typeof ProductTitle;
//   Image: typeof ProductImage;
//   Buttons: typeof ProductButtons;
// };

export const ProductCard = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});
