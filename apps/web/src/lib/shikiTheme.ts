import type {ThemeRegistration} from 'shiki'
import dracula from 'shiki/themes/dracula.mjs'

// Dracula's comment colour is 3.03:1 on its own background, under the 4.5:1 AA
// floor. Lifted to 4.97:1; every other colour in the theme already passes.
const LOW_CONTRAST = '#6272A4'
const ACCESSIBLE = '#8A96CE'

const {tokenColors} = dracula
if (!tokenColors) {
	// silently falling back to none would ship every snippet unhighlighted
	throw new Error('The Shiki dracula theme has no tokenColors to recolour')
}

export const accessibleDracula: ThemeRegistration = {
	...dracula,
	name: 'dracula-accessible-comments',
	tokenColors: tokenColors.map((token) =>
		token.settings?.foreground?.toUpperCase() === LOW_CONTRAST
			? {...token, settings: {...token.settings, foreground: ACCESSIBLE}}
			: token,
	),
}
