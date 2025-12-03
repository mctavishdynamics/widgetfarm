import react from "@vitejs/plugin-react";
import * as path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        button: path.resolve(__dirname, "src/components/Button/index.tsx"),
      },
      name: "widgetfarm",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: (id) => !id.startsWith(".") && !path.isAbsolute(id),
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: path.resolve(__dirname, "tsconfig.lib.json"),
      include: ["./src"],
      outDir: "./dist",
      rollupTypes: true,
    }),
  ],
});
