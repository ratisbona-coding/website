<script>
	import hb from '$lib/images/hackaburg.svg';
	import BaseComponent from './BaseComponent.svelte';

	let cards = [
		{
			title: 'Kanutour',
			date: {
				day: '01',
				month: 'Jan. 2023',
				time: 'Mi. 18.00'
			},
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolor',
			image: 'https://via.placeholder.com/700x250'
		},
		{
			title: 'Jahresversammlung',
			date: {
				day: '03',
				month: 'Feb. 2023',
				time: 'Do. 18.00'
			},
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolor',
			image: hb
		},
		{
			title: 'Michaels Rausschmiss weil er frech ist',
			date: {
				day: '12',
				month: 'Oct. 2023',
				time: 'Fr. 18.00'
			},
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolor',
			image: hb
		}
	];
</script>

<BaseComponent headline={'Termine'} id={'termine'}
	><div
		class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-10 mt-4 w-full mb-32"
	>
		{#each cards as card}
			<div class="flex justify-center w-full">
				<div
					class="flex flex-col md:flex-row rounded-lg bg-white drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer"
				>
					<div class="date mt-8 md:ml-8 md:mt-8 md:mr-32 md:mb-8 text-center">
						<h1 class="text-lime-500 text-5xl md:text-4xl">{card.date.day}</h1>
						<p class="text-black text-sm overflow-auto">{card.date.month}</p>
						<p class="text-black text-sm">{card.date.time}</p>
					</div>
					<div class="p-8 pb-0 lg:p-0 ma-4 flex flex-col justify-start">
						<h5 class=" text-gray-900 text-xl font-medium mb-2">{card.title}</h5>
						<p class="text-gray-700 text-base mb-8 mr-8">
							{card.description}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div></BaseComponent
>
