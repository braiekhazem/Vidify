import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dts(), cssInjectedByJsPlugin()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "@src": path.resolve(__dirname, "./src"),
    },
  },
  build: {},

  server: {
    port: 3000,

    // to get images from the server
    // proxy: {
    //   '^/users': {
    //     target: 'http://localhost:8000/',
    //   },
    // },
  },
});
