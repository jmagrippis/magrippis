import {usePathname} from 'next/navigation'

export const useShareUrl = () => {
	const pathname = usePathname()

	const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL
		? `https://${process.env.NEXT_PUBLIC_ROOT_URL}`
		: `http://localhost:${process.env.PORT || 3000}`

	return `${rootUrl}${pathname}`
}
