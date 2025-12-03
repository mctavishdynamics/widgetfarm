import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import * as process from "node:process";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  ...(process.env.BUILD_LIB
    ? {
        build: {
          lib: {
            entry: {
              button: path.resolve(
                __dirname,
                "src/components/Button/index.tsx",
              ),
            },
            name: "widgetfarm",
            fileName: (format, entryName) => `${entryName}.${format}.js`,
            formats: ["es", "cjs"],
          },
          rollupOptions: {
            external: (id) => !id.startsWith(".") && !path.isAbsolute(id),
            // external: [
            //   "react",
            //   "react-dom",
            //   "react/jsx-runtime",
            //   "react/jsx-dev-runtime",
            //   ...Object.keys(pkg.dependencies ?? {}),
            // ],
            // output: {
            //   preserveModules: true,
            //   globals: {
            //     react: "React",
            //     "react-dom": "ReactDOM",
            //   },
            // },
          },
          sourcemap: true,
          emptyOutDir: true,
        },
      }
    : {}),
  plugins: [
    ...(process.env.BUILD_LIB ? [] : [tanstackRouter({ target: "react" })]),
    react(),
    ...(process.env.BUILD_LIB
      ? [
          dts({
            tsconfigPath: path.resolve(__dirname, "tsconfig.lib.json"),
            include: ["./src"],
            outDir: "./dist",
            rollupTypes: true,
          }),
        ]
      : []),
  ],
});
