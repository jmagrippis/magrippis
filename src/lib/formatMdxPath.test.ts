import { formatMdxPath } from './formatMdxPath'

it('removes a trailing .mdx', () => {
  const path = 'blog/2020/how-to-setup-MDX-in-Nextjs.mdx'
  expect(formatMdxPath(path)).not.toContain('.mdx')
})

it('works with index files', () => {
  const path = 'coding-challenges/2020/cycling-element/index.mdx'

  expect(formatMdxPath(path)).toBe('coding-challenges/2020/cycling-element')
})

it('works with files nested in an mdx directory', () => {
  const path = 'mdx/blog/2020/how-to-setup-MDX-in-Nextjs.mdx'

  expect(formatMdxPath(path)).toBe('blog/2020/how-to-setup-MDX-in-Nextjs')
})

it('works with files nested in a src/mdx directory', () => {
  const path = 'src/mdx/blog/2020/how-to-setup-MDX-in-Nextjs.mdx'

  expect(formatMdxPath(path)).toBe('blog/2020/how-to-setup-MDX-in-Nextjs')
})
