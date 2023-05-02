declare module '@/icons/*.svg' {
	import type {FunctionComponent, SVGAttributes} from 'react'

	const content: FunctionComponent<SVGAttributes<SVGElement> | {title: string}>
	export default content
}
