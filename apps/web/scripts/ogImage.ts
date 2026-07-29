import {render} from 'takumi-js'

export const OG_WIDTH = 1200
export const OG_HEIGHT = 630

const FRAME_GRADIENT = 'linear-gradient(to top, #10b981, #e9d5ff)'
const PANEL_GRADIENT = 'linear-gradient(to bottom, #1a171c, #0d0b0f)'

// `background-clip: text` only paints text an element holds directly, so the
// gradient cannot sit on the wrapper: each line takes a slice of the ramp.
const GRADIENT_TOP = '#10b981'
const GRADIENT_MID = '#9dcbd3'
const GRADIENT_BOTTOM = '#e9d5ff'

const gradientText = (from: string, to: string, style: string, content: string) =>
	`<div style="background-image:linear-gradient(to bottom, ${from}, ${to});-webkit-background-clip:text;background-clip:text;color:transparent;${style}">${content}</div>`

// Takumi decodes no entities, so an escaped ampersand would render verbatim.
// Only angle brackets can break the parse.
const stripAngleBrackets = (value: string) => value.replace(/[<>]/g, '')

const card = (padding: number, lines: string) => `
	<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;padding:16px;background-image:${FRAME_GRADIENT}">
		<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;padding:${padding}px;border-radius:16px;background-image:${PANEL_GRADIENT}">
			<div style="display:flex;flex-direction:column;justify-content:center;width:100%;font-size:48px">
				${lines}
			</div>
		</div>
	</div>`

export const postCard = (title: string) =>
	card(
		32,
		gradientText(
			GRADIENT_TOP,
			GRADIENT_MID,
			'font-size:80px;margin-bottom:32px',
			stripAngleBrackets(title),
		) + gradientText(GRADIENT_MID, GRADIENT_BOTTOM, 'align-self:flex-end', 'by @jmagrippis'),
	)

export const homeCard = () =>
	card(
		48,
		gradientText(
			GRADIENT_TOP,
			GRADIENT_MID,
			'font-size:114px;margin-bottom:48px;line-height:86%',
			'Johnny Magrippis',
		) +
			gradientText(
				GRADIENT_MID,
				GRADIENT_BOTTOM,
				'',
				'I code around the world & inspire others to do the same! 🌍 @jmagrippis',
			),
	)

export const renderOgImage = async (html: string, font: Buffer) =>
	Buffer.from(
		await render(html, {
			width: OG_WIDTH,
			height: OG_HEIGHT,
			format: 'png',
			fonts: [font],
		}),
	)
