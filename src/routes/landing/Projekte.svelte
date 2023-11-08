<script>
	import hackaburg from '$lib/images/hackaburg.svg';
	import hackaburgSchool from '$lib/images/hackaburg_school.svg';
	import stammtisch from '$lib/images/hh_logo_rgb.svg';

	import BaseComponent from '../components/BaseComponent.svelte';
	import { darkMode } from '../store';

	let darkModeLocal = false;

	const unsubscribe = darkMode.subscribe((value) => {
		darkModeLocal = value;
	});

	let projects = [
		{
			organizer: 'Hackaburg',
			event: 'Hackathon',
			description:
				'Das Event, mit dem alles begann: Der Hackathon ist nach wie vor unser wichtiges Event und das Aushängeschild für unseren Verein.',
			image: hackaburg
		},
		{
			organizer: 'Hackaburg School',
			event: 'Hackathon',
			description:
				'Kinder und Jugendliche für das Coden zu begeistern. Genau das ist die Idee hinter dem "kleinen" Ableger der Hackaburg.',
			image: hackaburgSchool
		},
		{
			organizer: 'Hacky Hour',
			event: 'Netzwerkevent',

			description:
				'Regelmäßiger Austausch und Vernetzen mit anderen IT-Interessierten bei einem kühlen Getränk steht bei uns ganz hoch im Stellenwert.',
			image: stammtisch
		}
	];
</script>

<BaseComponent headline={'Projekte'} id={'projekte'}>
	<div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-4 w-full">
		{#each projects as project}
			<div class="relative group">
				{#if darkModeLocal}
					<div
						class="absolute -inset-0.5 mt-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
					/>
				{/if}
				<div
					class="relative p-4 col-span-1 bg-white dark:bg-gray-950 rounded-lg overflow-hidden mt-6"
					style="min-height: 700px"
				>
					<div class="mb-14">
						<div class="relative block h-full">
							<img class="h-80 rounded-lg mx-auto" src={project.image} alt="Project Graphic" />
						</div>
					</div>
					<div class="box-border h-42">
						<h4 class="text-gray-900 dark:text-white text-xl font-medium my-4 text-center">
							{project.organizer}
						</h4>
						<h2 class="text-gray-900 dark:text-white text-3xl font-medium my-4 text-center">
							{project.event}
						</h2>

						<p class="text-black dark:text-white text-base mt-10">{project.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</BaseComponent>
