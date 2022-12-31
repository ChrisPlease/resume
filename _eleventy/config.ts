import { Config } from '../types/eleventy'
import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import { UserConfig } from 'vite'
import { daterange } from './shortcodes'

export default function (eleventyConfig: Config): Partial<Config> {
  eleventyConfig.addWatchTarget(__dirname)

  eleventyConfig.addExtension(['11ty.tsx', '11ty.ts'], {
    key: '11ty.js',
  })

  eleventyConfig.addExtension(['11tydata.ts'], {
    key: '11tydata.js',
  })

  eleventyConfig.addShortcode('daterange', daterange)

  eleventyConfig.setServerPassthroughCopyBehavior('copy')
  eleventyConfig.addPassthroughCopy('src/assets/styles')
  eleventyConfig.addPassthroughCopy('src/assets/scripts')

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    serverOptions: {
      showAllHosts: true,
      domdiff: false,
    },
    viteOptions: <UserConfig>{
      clearScreen: false,
      server: {
        mode: 'development',
        middlewareMode: true,
      },
      optimizeDeps: {
        include: ['@fortawesome/fontawesome-pro'],
      },
      build: {
        mode: 'production',
        rollupOptions: {
          external: ['@fortawesome/fontawesome-pro'],
          output: {
            manualChunks (id) {
              if (id.includes('fontawesome')) {
                return 'fonts'
              }
            },

            assetFileNames: 'assets/styles/[name].[hash].css',
            chunkFileNames: 'assets/scripts/[name].[hash].js',
            entryFileNames: 'assets/scripts/[name].[hash].js',
          },
        },
      },
    },
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
