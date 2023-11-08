<script>
	import header from '$lib/images/header.png';
	import header_dark from '$lib/images/header_dark.png';

	import { darkMode } from '../store';

	let darkModeLocal = false;

	const unsubscribe = darkMode.subscribe((value) => {
		darkModeLocal = value;
	});
</script>

<section class="bg-white dark:bg-black mt-8">
	<div class="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
		<div class="mr-auto place-self-center lg:col-span-4">
			<h1
				class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-6xl dark:text-white mt-8"
			>
				Deine Coding-Events in Regensburg
			</h1>
			<p
				class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
			>
				Wir organisieren das ganze Jahr über eine Vielzahl an Tech-Events.
			</p>
		</div>
		<div class="lg:mt-0 lg:col-span-8 lg:flex mx-auto p-8">
			<img src={darkModeLocal ? header_dark : header} alt="mockup" />
		</div>
	</div>
</section>
