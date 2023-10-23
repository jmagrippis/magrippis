import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import highlight from 'rehype-highlight'

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {type: 'string', required: true},
		snippet: {type: 'string', required: true},
		publishedAt: {type: 'date', required: true},
		tags: {
			type: 'list',
			of: {type: 'string'},
			required: true,
		},
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/posts/${post._raw.flattenedPath}`,
		},
	},
}))

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Post],
	mdx: {
		// @ts-ignore @mdx-js/esbuild is on an older version of vfile
		rehypePlugins: [highlight],
	},
})
