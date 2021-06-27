import { defineConfig } from 'vite'
import path from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import mpa_ from 'vite-plugin-mpa'
import htmlTemplate_ from 'vite-plugin-html-template'

// TODO: fix these broken types
const mpa: typeof mpa_ = (mpa_ as any).default!
const htmlTemplate: typeof htmlTemplate_ = (htmlTemplate_ as any).default!

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    svelte(),
    // htmlTemplate({
    // }),
    // htmlTemplate({
    //   pagesDir: 'src/pages',
    //   pages: {
    //     index: {
    //       template: 'public/template.html',
    //       title: 'Index Page',
    //       entry: 'src/pages/index/main.ts',
    //     },
    //     squares: {
    //       template: 'public/template.html',
    //       title: 'SubPage Page',
    //       entry: 'src/pages/squares/main.ts',
    //     },
    //   },
    // }),
    mpa({
      open: false,
      // scanDir: "src/pages",
      // filename: "/svelte-graphics/pages/${pageName}/index.html",
      // filename: "pages/${pageName}/index.html",
      // filename: "${pageName}_index.html",
      // defaultEntries: 'index.html',
    }),
  ],
  base: '/svelte-graphics/'
})
