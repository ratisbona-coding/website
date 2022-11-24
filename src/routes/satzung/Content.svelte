<script>
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Satzung'}>
	<section class="text-center h-60">
		<span>Hier findest du unsere Satzung.</span>
		<br />
		<a href="docs/satzung.pdf" target="_blank">
			<button
				class="mt-8 border-2 border-black rounded-3xl px-3 py-2 text-black cursor-pointer hover:bg-black hover:text-gray-200 w-80"
				>Download Satzung</button
			>
		</a>
	</section>
</BaseComponent>
