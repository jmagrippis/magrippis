import {ImageResponse} from 'next/server'

import {allPosts} from 'contentlayer/generated'
import type {Props} from './types'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const contentType = 'image/png'
export const size = {
	width: 1200,
	height: 630,
}
export const generateImageMetadata = async ({params: {year, slug}}: Props) => {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath === `${year}/${slug}`,
	)

	if (!post) return null

	return [{alt: `${post.title} by @jmagrippis`, id: slug}]
}

const OG = async ({params: {slug, year}}: Props) => {
	const sansFont = fetch(
		new URL('../../../../fonts/Trispace-Regular.ttf', import.meta.url),
	).then((res) => res.arrayBuffer())

	const post = allPosts.find(
		(post) => post._raw.flattenedPath === `${year}/${slug}`,
	)

	if (!post) return new Response('Not found', {status: 404})

	return new ImageResponse(
		(
			<div
				style={{
					backgroundImage: 'linear-gradient(to top, #10b981, #e9d5ff)',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: 16,
					flexDirection: 'column',
				}}
			>
				<div
					style={{
						backgroundImage: 'linear-gradient(to bottom, #1a171c, #0d0b0f)',
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: 32,
						flexDirection: 'column',
						borderRadius: 16,
					}}
				>
					<div
						style={{
							fontSize: 48,
							backgroundImage: 'linear-gradient(to bottom, #10b981, #e9d5ff)',
							backgroundClip: 'text',
							color: 'transparent',
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
						}}
					>
						<div
							style={{
								fontSize: 80,
								marginBottom: 32,
							}}
						>
							{post.title}
						</div>
						<div style={{alignSelf: 'flex-end'}}>by @jmagrippis</div>
					</div>
				</div>
			</div>
		),
		{
			...size,
			emoji: 'noto',
			fonts: [
				{
					name: 'Trispace',
					data: await sansFont,
					style: 'normal',
					weight: 400,
				},
			],
		},
	)
}

export default OG
