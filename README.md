# fffX00-product-card

Este es un paquete de pruebas de despliegue en NPM

### Fernando Fuertes

## Instalación en un proyecto con Tailwind 4

```bash
npm install fffX00-product-card tailwind-merge clsx
```

```css
@import "tailwindcss";
@source "../../node_modules/fffX00-product-card";
```

## Ejemplo

```jsx
import { ProductCard } from "fffx00-product-card";
```

```jsx
<ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }}>
  {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
    <>
      <ProductCard.Image />
      <ProductCard.Title />
      <ProductCard.Buttons />
    </>
  )}
</ProductCard>
```
