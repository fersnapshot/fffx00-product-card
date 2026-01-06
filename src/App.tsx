import { ProductCard } from "../lib/components";
import "../lib/styles.css";

import coffeeMug from "./coffee-mug.png";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  image: coffeeMug,
};

export const App = () => {
  return (
    <div className="my-4 mx-16">
      <h1 className="text-4xl font-bold pb-4 border-b mb-8">Npm Deploy</h1>

      <ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }}>
        {() => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
