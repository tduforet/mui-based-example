import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/button.tsx", "src/theme/index.ts", "src/components/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
