import { defineConfig } from "vite";
import path from "path";
import { resolve } from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import mpa_ from "vite-plugin-mpa";
import htmlTemplate_ from "vite-plugin-html-template";

// TODO: fix these broken types
const mpa: typeof mpa_ = (mpa_ as any).default!;
const htmlTemplate: typeof htmlTemplate_ = (htmlTemplate_ as any).default!;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      // 'index.html': resolve(__dirname, 'src/pages/index/index.html'),
    },
  },
  plugins: [svelte(),
    // mpa({ open: false,})
],
  base: "/svelte-graphics/",
  build: {
    assetsInlineLimit: 0,
    // rollupOptions: {
    //   input: {
    //     // index: 'index.html',
    //     'index': resolve(__dirname, 'index.html'),
    //     'main': resolve(__dirname, 'src/pages/index/index.html'),
    //     'squares': resolve(__dirname, 'src/pages/squares/index.html'),
    //     // 'squares_main': resolve(__dirname, 'src/pages/squares/main.ts'),
    //   }
    // }
  }
});
