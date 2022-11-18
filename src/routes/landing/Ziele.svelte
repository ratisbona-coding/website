<script>
	import hb from '$lib/images/hackaburg.svg';
	import mint from '$lib/images/mint.svg';
	import science from '$lib/images/science.svg';
	import free from '$lib/images/free.svg';
	import student from '$lib/images/student.svg';

	import BaseComponent from './BaseComponent.svelte';

	let cards = [
		{
			title: 'Kostenlose Events',
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolor',
			image: free
		},
		{
			title: 'Studierende fördern',
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolor',
			image: student
		},
		{
			title: 'Forschung',
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolor',
			image: science
		},
		{
			title: 'Allgemeinheit',
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolor',
			image: hb
		},
		{
			title: 'MINT',
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolor',
			image: mint
		}
	];
</script>

<BaseComponent headline={'Unsere Ziele'} id={'ziele'}>
	<div class="flex items-center flex-wrap mb-20 z-1 relative">
		<div class="w-full md:w-1/2">
			<p class="text-gray-400">
				Daher wollen wir dafür sorgen, dass Menschen in unserer Region wissen, welche Möglichkeiten
				unsere Stadt bietet. Das erreichen wir das Organisieren von Events an Schulen und Rahmen für
				Vorträge vor Publikum zu schaffen.
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
		{#each cards as card}
			<div
				class="relative p-4 col-span-1 bg-white rounded-lg overflow-hidden shadow hover:shadow-md"
				style="min-height: 250px"
			>
				<div>
					<div class="relative block h-full">
						<img class="h-52 rounded-lg mx-auto" src={card.image} alt="kommt" />
					</div>
				</div>

				<h5 class="text-gray-900 text-xl font-medium my-4">{card.title}</h5>

				<p class="text-gray-700 text-base mb-4">{card.description}</p>
			</div>
		{/each}
	</div>
</BaseComponent>
