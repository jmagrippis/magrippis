<script lang="ts">
	import PageTitle from '#lib/components/typography/PageTitle.svelte'
	import Paragraph from '#lib/components/typography/Paragraph.svelte'
	import {Button} from '#lib/components/ui/button'
</script>

<main class="container flex flex-col items-center gap-4 pt-10 pb-16">
	<PageTitle>Lost?</PageTitle>

	<Paragraph>There’s nothing at this address... but there is plenty elsewhere 😄</Paragraph>

	<div class="flex gap-4">
		<Button href="/" variant="secondary" class="no-underline">Back home</Button>
		<Button href="/blog" variant="secondary" class="no-underline">Read the blog</Button>
	</div>
</main>
