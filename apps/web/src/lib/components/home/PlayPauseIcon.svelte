<script lang="ts">
	import type {SVGAttributes} from 'svelte/elements'

	type Props = {
		/** Shows play, the action a paused animation offers. */
		paused: boolean
		/** Without it, settling into the initial state on hydration would animate. */
		hasToggled: boolean
	} & SVGAttributes<SVGSVGElement>

	let {paused, hasToggled, ...restProps}: Props = $props()

	// Paused, the bars swing 60° onto the triangle: the left lands from (9, 7) to the tip, the right from the tip
	// to (9, 17). Each origin is the third corner of the equilateral triangle on a bar's end and where it lands
	const swing = $derived([
		hasToggled && 'transition-[rotate] duration-500 ease-(--ease-elastic-out-3)',
		!paused && 'delay-150',
	])
</script>

<svg aria-hidden="true" viewBox="0 0 24 24" {...restProps}>
	<g stroke="currentColor" stroke-width="4" stroke-linecap="round">
		<line
			x1="8"
			y1="7"
			x2="8"
			y2="17"
			class={['origin-[8.5px_6.134px]', swing, paused && '-rotate-60']}
		/>
		<line
			x1="16"
			y1="7"
			x2="16"
			y2="17"
			class={['origin-[12.5px_10.937px]', swing, paused && 'rotate-60']}
		/>
	</g>
	<!-- scaled about its centroid, filling the chevron once the bars have swung into it -->
	<path
		d="M9 7 L17.66 12 L9 17 Z"
		fill="currentColor"
		stroke="currentColor"
		stroke-width="4"
		stroke-linejoin="round"
		class={[
			'origin-[11.887px_12px]',
			hasToggled && 'transition-[scale,opacity] duration-200',
			paused ? 'delay-200 ease-out' : 'scale-0 opacity-0 ease-in',
		]}
	/>
</svg>
