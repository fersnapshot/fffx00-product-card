import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { ProductCard } from "./index";

const product = {
  id: "1",
  title: "Producto de Prueba",
  image: "custom-image.jpg",
};

vi.mock("./product-card-context", () => ({
  useProductContext: () => ({
    product,
  }),
}));

describe("ProductImage", () => {
  test("should render component properly", () => {
    render(<ProductCard.Image />);

    expect(screen.getByRole("img").getAttribute("src")).toContain(
      "custom-image.jpg"
    );
  });

  test("should render component with custom image", () => {
    const image = "product-image.jpg";
    render(<ProductCard.Image image={image} />);

    // screen.debug();

    expect(screen.getByRole("img").getAttribute("src")).toContain(image);
  });
});
