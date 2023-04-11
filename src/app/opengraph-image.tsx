import {ImageResponse} from 'next/server'

export const alt = 'jmagrippis | get inspired and code around the world!'
export const contentType = 'image/png'

const og = async () => {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 48,
					background: '#3b0764',
					color: '#faf5ff',
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
						fontSize: 128,
					}}
				>
					Johnny Magrippis
				</div>
				<div>
					I wanna code around the world, inspire others to do the same! 🌍
					jmagrippis
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	)
}

export default og
