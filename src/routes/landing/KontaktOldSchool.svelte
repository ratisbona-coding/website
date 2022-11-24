<script>
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Kontakt'} id={'kontakt'}>
	<div class="text-center mb-32">
		<span
			>Wenn du mit uns in Kontakt treten möchtest, freuen wir uns über eine Mail von dir. <br />Am
			besten an <b>vorstand@ratisbona-coding.org</b> oder einfach den unten Button drücken.</span
		>
		<br />
		<a href="mailto:vorstand@ratisbona-coding.org" target="_blank">
			<button
				class="mt-8 border-2 border-black rounded-3xl px-3 py-2 text-black cursor-pointer hover:bg-black hover:text-gray-200 w-80"
				>Schreib uns doch einfach</button
			>
		</a>
	</div>
</BaseComponent>
