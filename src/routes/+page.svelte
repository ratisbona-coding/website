<script>
	import Nav from './components/Nav.svelte';
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
	import Hero from './landing/Hero.svelte';
	import About from './landing/About.svelte';
	import Ziele from './landing/Ziele.svelte';
	import Footer from './components/Footer.svelte';
	import Projekte from './landing/Projekte.svelte';
	import Mitglied from './landing/Mitglied.svelte';
	import Termine from './landing/Termine.svelte';
	import KontaktOldSchool from './landing/KontaktOldSchool.svelte';
	import Hb23 from './landing/HB23.svelte';
	export const prerender = true;
</script>

<Nav />
<div class="container mx-auto">
	<Hero />
	<Termine />
	<About />
	<script
		src="https://static.elfsight.com/platform/platform.js"
		data-use-service-core
		defer
	></script>
	<div class="elfsight-app-85cfdd71-6583-4525-93d3-53ff4349bf28" />
	<Ziele />
</div>

<Hb23 />

<div class="container mx-auto">
	<Projekte />
	<Mitglied />
	<KontaktOldSchool />
</div>
<Footer />

<style>
	@media (min-width: 1536px) {
		.container {
			max-width: 1336px;
		}
	}
</style>
