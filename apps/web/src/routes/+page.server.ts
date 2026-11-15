import {SITE_DESCRIPTION} from '#lib/constants.js'

import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'Johnny Magrippis',
		description: SITE_DESCRIPTION,
	},
})
