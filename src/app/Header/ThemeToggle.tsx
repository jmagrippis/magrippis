'use client'

import type {MouseEventHandler} from 'react'
import {ThemeToggleIcon} from './ThemeToggleIcon'

const deriveNextTheme = (currentTheme: string | undefined) => {
	switch (currentTheme) {
		case 'light':
			return 'dark'
		case 'dark':
			return 'light'
		case 'auto':
		default:
			return window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'light'
				: 'dark'
	}
}

export const ThemeToggle = () => {
	const onClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
		event.preventDefault()

		const theme = document.documentElement.dataset.theme
		const nextTheme = deriveNextTheme(theme)
		document.documentElement.dataset.theme = nextTheme
		localStorage.setItem('theme', nextTheme)
	}

	return (
		<button className="w-8" onClick={onClick}>
			<ThemeToggleIcon />
		</button>
	)
}
