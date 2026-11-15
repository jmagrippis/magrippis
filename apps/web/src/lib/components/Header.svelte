<script lang="ts">
	import Nav from './Nav.svelte'
</script>

<!-- `shrink-0`: the body is a column flexbox as tall as the screen, which would squeeze the header back to its minimum -->
<header class="from-primary-800 to-primary-950 min-h-(--header-height) shrink-0 bg-gradient-to-br">
	<Nav />
</header>
