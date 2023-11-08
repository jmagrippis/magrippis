import type {Config} from 'tailwindcss'
import colors from 'tailwindcss/colors'

const withAlphaValue = (varName: string) =>
	`hsl(var(--${varName}) / <alpha-value>)`

const config: Config = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: colors.purple,
			secondary: colors.emerald,
			copy: {
				base: withAlphaValue('copy-base-color'),
				muted: withAlphaValue('copy-muted-color'),
				inverted: withAlphaValue('copy-inverted-color'),
			},
			surface: {
				1: withAlphaValue('surface-1-color'),
				2: withAlphaValue('surface-2-color'),
				3: withAlphaValue('surface-3-color'),
				inverted: withAlphaValue('surface-inverted-color'),
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
			sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
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
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

export default config
