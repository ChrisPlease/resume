import { Config } from '../types/eleventy'
import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import { UserConfig } from 'vite'
import { daterange } from './shortcodes'

export default function (eleventyConfig: Config) {

  eleventyConfig.addWatchTarget(__dirname)

  eleventyConfig.addExtension(['11ty.tsx', '11ty.ts'], {
    key: '11ty.js'
  })

  eleventyConfig.addShortcode('daterange', daterange)

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: <UserConfig>{
      clearScreen: false,
      server: {
        mode: 'development',
        middlewareMode: true,
      },
      build: {
        mode: 'production',
        rollupOptions: {
          output: {
            assetFileNames: 'assets/styles/main.[hash].css',
            chunkFileNames: 'assets/scripts/[name].[hash].js',
            entryFileNames: 'assets/scripts/[name].[hash].js'
          }
        },
      }
    }
  })

  eleventyConfig.addPassthroughCopy('src/assets/styles')
  eleventyConfig.addPassthroughCopy('src/assets/scripts')

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
}
