import { defineConfig } from "rollup";
import ts from "@rollup/plugin-typescript";

export default defineConfig({
  input: "./src/index.ts",
  output: {
    file: "./dist/index.js",
  },
  plugins: [ts()],
});
