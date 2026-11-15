<script lang="ts">
	import TwitterIcon from '~icons/brand/twitter'

	import NewTabHint from '#lib/components/NewTabHint.svelte'
	import {cn} from '#lib/utils.js'

	import CopyButton from './CopyButton.svelte'
	import {getTwitterHref} from './getTwitterHref'

	type Props = {
		title: string
		tags: string[]
		url: string
		class?: string
	}
	let {title, tags, url, class: className}: Props = $props()
</script>

<aside
	class={cn(
		'border-emphasis bg-surface-2 shadow-low mb-2 rounded border p-4 text-center',
		className,
	)}
>
	<div class="mb-2">💜 sharing is caring 💜</div>
	<div class="flex items-center justify-center">
		<!-- Twitter's own #26a7de is 2.73:1 on white, under the 3:1 floor. The browser's focus ring
		     takes the white text's colour, 2.5:1 on this panel in light theme, so it takes the panel's text colour instead -->
		<a
			href={getTwitterHref({title, tags, url})}
			target="_blank"
			rel="noopener noreferrer"
			class="shadow-low hover:bg-primary-200 hover:shadow-mid dark:hover:bg-primary-800 focus-visible:outline-copy-base mr-4 inline-flex items-center justify-center rounded bg-[#1a7ab0] py-2 pr-5 pl-4 text-white no-underline transition duration-300 ease-in-out focus-visible:outline-3"
		>
			<TwitterIcon class="mr-1 w-8" />
			tweet<NewTabHint />
		</a>
		<CopyButton {url} />
	</div>
</aside>
