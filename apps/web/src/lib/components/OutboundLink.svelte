<script lang="ts">
	import NewTabHint from './NewTabHint.svelte'
	import Button, {type ButtonProps} from './ui/button/button.svelte'

	type Props = {href: string} & Omit<ButtonProps, 'target' | 'rel'>

	let {children, ...props}: Props = $props()
</script>

<Button variant="link" target="_blank" rel="noopener noreferrer" {...props}>
	{@render children?.()}<NewTabHint />
</Button>
