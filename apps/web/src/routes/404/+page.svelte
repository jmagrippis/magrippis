<script lang="ts">
	import NotFound from '#lib/components/NotFound.svelte'
</script>

<svelte:head>
	<!-- reachable at /404 with a 200, which crawlers would otherwise index as a
	     real page alongside the copy Cloudflare serves on actual misses -->
	<meta name="robots" content="noindex" />
</svelte:head>

<NotFound />
