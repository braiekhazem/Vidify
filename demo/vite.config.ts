import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dts(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "@src": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        "classnames",
        "rc-slider",
        "react-full-screen",
        "rc-tooltip",
        "react-tooltip",
      ],
      output: {
        manualChunks(id) {
          if (id.includes("node_modules") && !id.includes("sentry")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
    sourcemap: true,
  },

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
