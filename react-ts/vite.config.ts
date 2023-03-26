/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/testsSetup.ts",
    coverage: {
      provider: "istanbul",
      enabled: true,
      all: true,
    },
  },
});
