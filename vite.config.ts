import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: "./tsconfig.lib.json", // <--- Usamos la config de la lib
      insertTypesEntry: true,
      rollupTypes: true, // Opcional: junta todos los tipos en un solo archivo index.d.ts
    }),
  ],
  build: {
    // Aumenta el límite para que las imágenes se codifiquen en el JS (Base64)
    assetsInlineLimit: 10000,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "fffx00-product-card",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "tailwindcss",
        "tailwind-merge",
        "clsx",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "tailwind-merge": "tailwindMerge",
          clsx: "clsx",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
