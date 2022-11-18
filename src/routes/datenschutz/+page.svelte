<script>
	import './../../app.css';
	import 'flowbite/dist/flowbite.css';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import Content from './Content.svelte';
</script>

<div class="container mx-auto">
	<Nav />
	<Content />
</div>
<div class="fixed bottom-0 w-full">
	<Footer />
</div>
