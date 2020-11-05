export const formatMdxPath = (path: string) =>
  path.replace(/(src\/)?(mdx\/)|(\/index)?\.mdx$/gi, '')
