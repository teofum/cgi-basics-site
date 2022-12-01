import { defineConfig } from 'astro/config';

// integrations
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// remark/rehype plugins
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'light-plus',
    }
  }
});