// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 配置为你的域名或服务器 IP
  site: 'https://blog.starminus.uk',
  
  // 输出目录
  outDir: './dist',
  
  // 静态资源配置
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  
  // 集成插件
  integrations: [
    mdx(),
    sitemap(),
  ],
  
  // 开发服务器配置
  server: {
    port: 4321,
    host: true
  },
  
  // Vite 配置
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
  },
});
