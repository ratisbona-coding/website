<script>
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Satzung'} id={'satzung'}>
	<section class="text-center h-60 dark:text-white">
		<span>Hier findest du unsere Satzung.</span>
		<br />
		<a href="docs/satzung.pdf" target="_blank">
			<button
				class="mt-8 border-2 dark:border-white dark:text-white border-black rounded-3xl px-3 py-2 text-black cursor-pointer hover:bg-black hover:text-gray-200 w-80"
				>Download Satzung</button
			>
		</a>
	</section>
</BaseComponent>
