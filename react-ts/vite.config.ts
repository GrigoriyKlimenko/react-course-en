/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import eslint from "vite-plugin-eslint";
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  server: {
    // host: true,
    // port: 5173,
    // watch: {
    //   ignored: ["**/coverage/**"],
    // },
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/testsSetup.ts",
    watch: false,
    exclude: [
      "**/public/**",
      "**/node_modules/**",
      "**/dist/**",
      "**/.{idea,git,cache,output,temp}/**",
    ],

    coverage: {
      provider: "istanbul",
      enabled: true,
      all: true,
      exclude: ["**/public/**"],
    },
  },
});
