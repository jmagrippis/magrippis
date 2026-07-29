/// <reference types="@sveltejs/enhanced-img" />

import 'unplugin-icons/types/svelte'

declare global {
	namespace App {
		interface PageData {
			meta?: {
				title: string
				description: string
				/** Path under `static/og`, defaulting to the site-wide card. */
				image?: string
			}
		}
	}
}

export {}
