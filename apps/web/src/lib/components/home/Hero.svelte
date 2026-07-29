<script lang="ts">
	import avatar from './images/hero.jpg?enhanced'
	import Typing from './Typing.svelte'
</script>

<section
	class="container mt-4 mb-8 grid h-48 grid-cols-12 items-center gap-4 px-2 py-4 lg:mt-12 lg:mb-16 lg:h-60 lg:gap-8"
>
	<!-- span goes on the wrapper: `enhanced:img` puts its class on the inner `<img>` -->
	<div class="col-span-3 lg:col-span-2">
		<enhanced:img
			src={avatar}
			alt="Johnny’s avatar"
			fetchpriority="high"
			class="shadow-mid w-full rounded-full"
		/>
	</div>
	<h1 class="col-span-9 text-2xl lg:col-span-10 lg:text-4xl">
		Hello, I’m <strong>Johnny</strong> and I’m...
		<Typing />
	</h1>
</section>
