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
</script>

<div class="container mx-auto">
	<Nav />
	<Hero />
	<About />
	<Ziele />
	<Projekte />
	<Mitglied />
	<Termine />
</div>
<Footer />

<style>
	@media (min-width: 1536px) {
		.container {
			max-width: 1336px;
		}
	}
</style>
