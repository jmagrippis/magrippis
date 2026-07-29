<script lang="ts">
	import Button, {type ButtonProps} from './ui/button/button.svelte'

	type Props = {href: string} & Omit<ButtonProps, 'target' | 'rel'>

	let props: Props = $props()
</script>

<Button variant="link" target="_blank" rel="noopener noreferrer" {...props} />
