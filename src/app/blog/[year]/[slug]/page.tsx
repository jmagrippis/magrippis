import 'highlight.js/styles/github-dark-dimmed.min.css'

import type {MDXComponents} from 'mdx/types'
import type {Metadata} from 'next'
import {useMDXComponent} from 'next-contentlayer/hooks'
import {notFound} from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {allPosts} from 'contentlayer/generated'
import Demonstration from '@/components/Demonstration'
import RelativeTimeDemo from '@/components/RelativeTimeDemo'
import ShareCTA from '@/components/ShareCTA/ShareCTA'
import {proseClasses} from '@/lib/sharedClasses'
import type {Props} from './types'

export const generateStaticParams = () =>
	allPosts.map((post) => {
		const [year, slug] = post._raw.flattenedPath.split('/')
		return {
			year,
			slug,
		}
	})

export const generateMetadata = async ({
	params: {year, slug},
}: Props): Promise<Metadata> => {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath === `${year}/${slug}`,
	)

	if (!post) notFound()

	return {
		title: post.title,
		description: post.snippet,
	}
}

const mdxComponents: MDXComponents = {
	// Custom Components
	Demonstration,
	RelativeTimeDemo,
	ShareCTA,
}

const Post = ({params: {slug, year}}: Props) => {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath === `${year}/${slug}`,
	)

	if (!post) notFound()

	const MDXContent = useMDXComponent(post.body.code)

	return (
		<main className="pb-8">
			<article className={`container ${proseClasses}`}>
				<h1 className="bg-gradient-to-bl from-secondary-600 from-50% via-primary-500 to-primary-400 bg-clip-text px-2 text-transparent drop-shadow dark:from-secondary-500 dark:via-primary-400 dark:to-primary-200">
					{post.title}
				</h1>
				<Image
					src={`/blog/${year}/${slug}.jpg`}
					width={2048}
					height={1365}
					alt={post.title}
					priority
				/>
				<section className="px-2">
					<MDXContent components={mdxComponents} />
				</section>
				<ShareCTA className="mx-2" title={post.title} tags={post.tags} />
				<Link
					href="/blog"
					className="mx-2 block rounded bg-surface-2 py-4 text-center text-lg font-semibold"
				>
					Check out all posts
				</Link>
			</article>
		</main>
	)
}

export default Post
