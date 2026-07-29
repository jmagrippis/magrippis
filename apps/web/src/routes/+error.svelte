<script lang="ts">
	import {page} from '$app/state'

	import NotFound from '#lib/components/NotFound.svelte'
	import PageTitle from '#lib/components/typography/PageTitle.svelte'
	import Paragraph from '#lib/components/typography/Paragraph.svelte'
	import {Button} from '#lib/components/ui/button'
</script>

<svelte:head>
	<title>{page.status} | jmagrippis</title>
</svelte:head>

{#if page.status === 404}
	<NotFound />
{:else}
	<main class="container flex flex-col items-center gap-4 pt-10 pb-16">
		<PageTitle>Oh no!</PageTitle>
		<Paragraph>{page.error?.message}</Paragraph>
		<Button href="/" variant="secondary" class="no-underline">Back home</Button>
	</main>
{/if}
