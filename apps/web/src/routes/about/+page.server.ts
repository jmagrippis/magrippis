import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'About',
		description: 'Learn more about Johnny and this website in particular!',
	},
})
