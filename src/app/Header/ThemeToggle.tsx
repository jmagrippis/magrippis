'use client'

import type {MouseEventHandler} from 'react'
import {ThemeToggleIcon} from './ThemeToggleIcon'

export const ThemeToggle = () => {
	const onClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
		event.preventDefault()
		if (window.toggleTheme) {
			window.toggleTheme()
		}
	}

	return (
		<button className="w-8" onClick={onClick}>
			<ThemeToggleIcon />
		</button>
	)
}
