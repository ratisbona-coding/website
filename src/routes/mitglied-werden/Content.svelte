<script>
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Mitglied werden'}>
	<section class="text-center h-60">
		<span
			>Aktuell musst du noch ein PDF ausfüllen und uns per Mail an <b
				>vorstand@ratisbona-coding.org</b
			>
			schicken. <br />Wir arbeiten daran, dass zukünftige Mitglieder direkt hier ihren
			Mitgliedsantrag stellen können.</span
		>
		<br />
		<a href="docs/mitgliedsantrag-ratisbona-coding.pdf" target="_blank">
			<button
				class="mt-8 border-2 border-black rounded-3xl px-3 py-2 text-black cursor-pointer hover:bg-black hover:text-gray-200 w-80"
				>Download Satzung</button
			>
		</a>
	</section>
</BaseComponent>
