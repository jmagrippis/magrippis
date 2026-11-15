import {describe, expect, it} from 'vite-plus/test'

import {loopsWithinLimit, playingMs} from './animationLimit'

const frames = (count: number, delay: number) => Array.from({length: count}, () => delay)

describe('an animation’s playing time', () => {
	it('fits as many whole passes as stop within 5 seconds', () => {
		const strapIn = frames(11, 30)

		expect(loopsWithinLimit(strapIn)).toBe(15)
		expect(playingMs(strapIn, 15)).toBe(4950)
	})

	it('never ends at a loop count of 0', () => {
		expect(playingMs(frames(2, 100), 0)).toBe(Infinity)
	})
})
