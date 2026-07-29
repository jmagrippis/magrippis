import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'Lost?',
		description: 'There’s nothing at this address, but there is plenty elsewhere on the site.',
	},
})
