import 'highlight.js/styles/github-dark-dimmed.min.css'

import {allPosts} from 'contentlayer/generated'
import {useMDXComponent} from 'next-contentlayer/hooks'
import {notFound} from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export const generateStaticParams = () =>
	allPosts.map((post) => {
		const [year, slug] = post._raw.flattenedPath.split('/')
		return {
			year,
			slug,
		}
	})

type Props = {
	params: {slug: string; year: string}
}

const Post = ({params: {slug, year}}: Props) => {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath === `${year}/${slug}`,
	)

	if (!post) notFound()

	const MDXContent = useMDXComponent(post.body.code)

	return (
		<main className="pb-6">
			<article className="container prose prose-lg prose-stone pt-10 dark:prose-invert lg:prose-xl xl:prose-2xl prose-a:decoration-emphasis prose-a:decoration-2 prose-a:transition-colors hover:prose-a:text-emphasis hover:prose-a:decoration-emphasis-hover prose-code:rounded-sm prose-code:bg-surface-2 prose-pre:p-0 prose-img:mx-auto md:prose-img:rounded md:prose-img:shadow-low">
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
					<MDXContent />
				</section>
			</article>
			<Link
				href="/blog"
				className="mx-2 block rounded bg-surface-2 py-4 text-center text-lg font-semibold"
			>
				Check out all posts
			</Link>
		</main>
	)
}

export default Post
