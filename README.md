# fffX00-product-card

Este es un paquete de pruebas de despliegue en NPM

### Fernando Fuertes

## Ejemplo

```
import { ProductCard } from "fffx00-product-card";
```

```
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
