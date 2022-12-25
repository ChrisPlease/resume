// @ts-check
// This is just a wrapper so we can have our real config in TypeScript.
require('ts-node').register({
  files: true,
  swc: true,
  compilerOptions: {
    module: 'commonjs',
  },
})

// @ts-expect-error to avoid "An import path cannot end with a '.ts' extension. "
const { default: eleventyConfig } = require('./_eleventy/config.ts')

module.exports = eleventyConfig
