import {usePathname} from 'next/navigation'

export const rootUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: `http://localhost:${process.env.PORT || 3000}`

export const useShareUrl = () => {
	const pathname = usePathname()

	return `${rootUrl}${pathname}`
}
