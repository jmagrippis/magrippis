'use client'

import {MouseEventHandler, useEffect, useState} from 'react'
import {ThemeToggleIcon} from './ThemeToggleIcon'

const themes = ['light', 'dark', 'auto'] as const
type Theme = (typeof themes)[number]

const isTheme = (value: unknown): value is Theme =>
	themes.includes(value as Theme)

const deriveNextTheme = (currentTheme: string) => {
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

type Props = {
	themeCookie: string
}

export const ThemeToggle = ({themeCookie}: Props) => {
	const [theme, setTheme] = useState<Theme>(
		isTheme(themeCookie) ? themeCookie : 'auto'
	)
	useEffect(() => {
		document.documentElement.dataset.theme = theme
	}, [theme])

	const onClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
		event.preventDefault()

		const nextTheme = deriveNextTheme(theme)
		setTheme(nextTheme)

		await fetch('/theme', {
			method: 'POST',
			body: JSON.stringify({theme: nextTheme}),
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
		})
	}

	return (
		<button className="w-8" onClick={onClick}>
			<ThemeToggleIcon />
		</button>
	)
}
