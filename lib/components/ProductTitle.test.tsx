import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { ProductCard } from "./index";

const product = {
  id: "1",
  title: "Producto de Prueba",
};

vi.mock("./product-card-context", () => ({
  useProductContext: () => ({
    product,
  }),
}));

describe("ProductTitle", () => {
  test("should render component properly", () => {
    render(<ProductCard.Title title="Custom Product" />);

    // screen.debug();

    expect(screen.queryByText(/Custom Product/i)).not.toBeNull();
  });
});
