import type {Config} from 'tailwindcss'
import colors from 'tailwindcss/colors'

const withAlphaValue = (varName: string) =>
	`hsl(var(--${varName}) / <alpha-value>)`

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: colors.purple,
			secondary: colors.emerald,
			copy: {
				base: withAlphaValue('copy-base-color'),
				muted: withAlphaValue('copy-muted-color'),
			},
			surface: {
				1: withAlphaValue('surface-1-color'),
				2: withAlphaValue('surface-2-color'),
				3: withAlphaValue('surface-3-color'),
			},
			emphasis: {
				DEFAULT: withAlphaValue('emphasis-color'),
				hover: withAlphaValue('emphasis-hover-color'),
			},
			gray: colors.stone,
			white: colors.white,
			transparent: 'transparent',
			current: 'currentColor',
		},
		boxShadow: {
			low: 'var(--shadow-elevation-low)',
			mid: 'var(--shadow-elevation-medium)',
			high: 'var(--shadow-elevation-high)',
		},
		container: {
			center: true,
		},
		fontFamily: {
			sans: ['var(--font-sans)', 'var(--font-emoji)'],
		},
		extend: {
			keyframes: {
				blink: {
					'0%, 100%': {opacity: '1'},
					'50%': {opacity: '0'},
				},
			},
			animation: {
				blink: 'blink 0.8s infinite steps(1)',
			},
		},
	},
	plugins: [],
}

export default config