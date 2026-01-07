import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { ProductCard } from "./index";

const product = {
  id: "1",
  title: "Producto de Prueba",
};

describe("ProductCard", () => {
  test("should render component properly", () => {
    render(
      <ProductCard product={product} initialValues={{ count: 5, maxCount: 10 }}>
        {() => (
          <>
            <ProductCard.Title />
            <ProductCard.Image />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
    );

    // screen.debug();

    expect(screen.queryByText(/Producto de Prueba/i)).not.toBeNull();

    expect(screen.getByRole("img").getAttribute("src")).toContain(
      "no-image.jpg"
    );

    expect(screen.getByRole("button", { name: "+" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-" })).toBeDefined();
    expect(screen.getByText("5").innerHTML).toBeDefined();
  });

  test("should increment counter", () => {
    render(
      <ProductCard product={product}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span data-testid="counter">{count}</span>
            <button onClick={() => increaseBy(1)}>Add</button>
          </>
        )}
      </ProductCard>
    );

    // screen.debug();

    expect(screen.getByTestId("counter").innerHTML).toBe("0");

    const button = screen.getByRole("button", { name: "Add" });
    fireEvent.click(button);

    expect(screen.getByTestId("counter").innerHTML).toBe("1");
  });
});
