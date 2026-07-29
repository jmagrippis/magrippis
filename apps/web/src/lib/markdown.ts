import rehypeShiki from '@shikijs/rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkSmartypants from 'remark-smartypants'
import {unified} from 'unified'

import {accessibleDracula} from './shikiTheme'

// one theme, not `themes: {light, dark}`: dual themes emit CSS variables, and
// this HTML also goes into the feed where no stylesheet follows it
const SHIKI_THEME = accessibleDracula

const processor = unified()
	.use(remarkParse)
	.use(remarkGfm)
	.use(remarkSmartypants)
	.use(remarkRehype)
	.use(rehypeSlug)
	.use(rehypeShiki, {theme: SHIKI_THEME})
	.use(rehypeStringify)

export const markdownToHtml = async (markdown: string) => String(await processor.process(markdown))
