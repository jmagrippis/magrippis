<script lang="ts">
	import TwitterIcon from '~icons/brand/twitter'

	import {cn} from '#lib/utils'

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
		<!-- Twitter's own #26a7de is 2.73:1 on white, under the 3:1 floor -->
		<a
			href={getTwitterHref({title, tags, url})}
			target="_blank"
			rel="noopener noreferrer"
			class="shadow-low hover:bg-primary-200 hover:shadow-mid dark:hover:bg-primary-800 mr-4 inline-flex items-center justify-center rounded bg-[#1a7ab0] py-2 pr-5 pl-4 text-white no-underline transition duration-300 ease-in-out"
		>
			<TwitterIcon class="mr-1 w-8" />
			tweet
		</a>
		<CopyButton {url} />
	</div>
</aside>
