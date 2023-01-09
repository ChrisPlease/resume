import CleanCSS from 'clean-css'

export const cssmin = (code: string): string => {
  return new CleanCSS({}).minify(code).styles
}
