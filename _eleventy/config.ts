import { Config } from "../types/eleventy"
import { daterange } from "./shortcodes"

export default function (eleventyConfig: Config) {

  eleventyConfig.addWatchTarget(__dirname)

  eleventyConfig.addExtension(['11ty.tsx', '11ty.ts'], {
    key: '11ty.js'
  })

  eleventyConfig.addShortcode('daterange', daterange)

  eleventyConfig.addPassthroughCopy('src/styles')

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
}
