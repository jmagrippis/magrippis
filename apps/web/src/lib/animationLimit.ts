/** WCAG 2.2.2, met by W3C technique G152: an animation that starts on its own stops within 5 seconds. */
export const MAX_PLAYING_MS = 5000

export const cycleMs = (delays: number[]) => delays.reduce((total, delay) => total + delay, 0)

/** The most whole passes that fit, as a WebP loop count, which Chromium, Firefox and WebKit play exactly that many times. */
export const loopsWithinLimit = (delays: number[]) => Math.floor(MAX_PLAYING_MS / cycleMs(delays))

/** A WebP loop count of 0 plays forever. */
export const playingMs = (delays: number[], loop: number) =>
	loop === 0 ? Infinity : cycleMs(delays) * loop
