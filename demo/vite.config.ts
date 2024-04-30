import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dts(), cssInjectedByJsPlugin()],

  build: {
    rollupOptions: {
      external: [
        "/classnames",
        "/rc-slider",
        "/react-full-screen",
        "/rc-tooltip",
        "/react-tooltip",
        "/rc-slider/assets/index.css",
        "/react-tooltip/dist/react-tooltip.css",
        "/react-use-pip",
      ],
    },
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
