import {allPosts} from 'contentlayer/generated'
import {PageTitle} from '../PageTitle'
import Image from 'next/image'
import Link from 'next/link'

import {isoStringToRelativeTime} from '@/lib/relativeTime'

const sortedPosts = allPosts.sort((a, b) => {
	return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
})

const BlogIndex = () => (
	<main className="container mb-8 pt-10">
		<PageTitle>Blog</PageTitle>
		<ul className="divide-y divide-surface-2">
			{sortedPosts.map((post, i) => {
				const [year, slug] = post._raw.flattenedPath.split('/')

				return (
					<li key={post.title} className="py-8">
						<article className="sm:grid sm:grid-cols-3 sm:gap-4">
							<Link href={`/blog/${year}/${slug}`}>
								<Image
									src={`/blog/${year}/${slug}.jpg`}
									width={2048}
									height={1365}
									alt={post.title}
									priority={i < 3}
									className="mb-4 place-self-center sm:mb-0 sm:rounded sm:shadow-mid"
								/>
							</Link>
							<div className="flex flex-col gap-4 px-2 sm:col-span-2">
								<h2 className="text-2xl">
									<Link href={`/blog/${year}/${slug}`}>{post.title}</Link>
								</h2>
								<p className="grow text-xl font-extralight">{post.snippet}</p>
								<ul className="flex gap-2 place-self-end font-light">
									{post.tags.map((tag) => (
										<li key={tag} className="rounded bg-surface-3 px-2">
											{tag}
										</li>
									))}
								</ul>
								<div className="place-self-end font-extralight">
									{isoStringToRelativeTime(post.publishedAt)}
								</div>
							</div>
						</article>
					</li>
				)
			})}
		</ul>
	</main>
)

export default BlogIndex
