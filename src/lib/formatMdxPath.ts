export const formatMdxPath = (path: string) =>
  path.replace(/(mdx\/)|(\/index)?\.mdx$/gi, '')
