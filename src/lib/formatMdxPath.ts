export const formatMdxPath = (path: string) =>
  path.replace(/(src\/)?((mdx|pages)\/)|(\/index)?\.mdx$/gi, '')
