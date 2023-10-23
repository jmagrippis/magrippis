import {ImageResponse} from 'next/server'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const contentType = 'image/png'
export const size = {
	width: 1200,
	height: 630,
}
export const alt = 'jmagrippis | get inspired and code around the world!'

const OG = async () => {
	const sansFont = fetch(
		new URL('../fonts/Trispace-Regular.ttf', import.meta.url),
	).then((res) => res.arrayBuffer())

	return new ImageResponse(
		(
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
				}}
			>
				<div
					style={{
						fontSize: 48,
						backgroundImage: 'linear-gradient(to bottom, #10b981, #e9d5ff)',
						backgroundClip: 'text',
						color: 'transparent',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				>
					<div
						style={{
							fontSize: 128,
							marginBottom: 32,
							lineHeight: '86%',
						}}
					>
						Johnny Magrippis
					</div>
					<div>
						I code around the world & inspire others to do the same! 🌍
						@jmagrippis
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
