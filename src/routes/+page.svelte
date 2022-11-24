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
	export const prerender = true;
</script>

<Nav />
<div class="container mx-auto">
	<Hero />
	<About />
	<Ziele />
	<Projekte />
	<Mitglied />
	<Termine />
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
