import {NextResponse} from 'next/server'

const TEN_YEARS_IN_SECONDS = 60 * 60 * 24 * 365 * 10

export const POST = async (request: Request) => {
	const origin = request.headers.get('origin')
	const {theme} = await request.json()

	const response = new NextResponse(theme)

	response.cookies.set('theme', theme, {
		path: '/',
		maxAge: TEN_YEARS_IN_SECONDS,
		sameSite: 'lax',
		httpOnly: true,
		secure: !origin?.includes('localhost'),
	})

	return response
}
