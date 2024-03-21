<script lang="ts">
	import BaseComponent from '../components/BaseComponent.svelte';
	import { createClient } from '$lib/prismicio';
	import { asDate } from '@prismicio/client';
	import { PrismicRichText, PrismicLink } from '@prismicio/svelte';
	import { darkMode } from '../store';

	const prismicClient = createClient();

	let darkModeLocal = false;

	const unsubscribe = darkMode.subscribe((value) => {
		darkModeLocal = value;
	});

	async function getEvents() {
		const events = await prismicClient.getAllByType('event', {
			orderings: {
				field: 'my.event.date',
				direction: 'asc'
			}
		});
		return events;
	}

	let eventsPromise = getEvents();

	// ugly but required
	var days = ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'];
	var months = [
		'Januar',
		'Februar',
		'März',
		'April',
		'Mai',
		'Juni',
		'Juli',
		'August',
		'September',
		'Oktober',
		'November',
		'Dezember'
	];

	function transformMinutes(minutes: number) {
		if (minutes === 0) return '00';
		else return minutes;
	}

	function getFormattedTime(date: Date) {
		return `${days[date.getDay()]} ${date.getHours()}:${transformMinutes(date.getMinutes())}`;
	}
</script>

<BaseComponent headline={'Dates'} id={'termine'}
	><div
		class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-10 mt-4 w-full mb-20"
	>
		{#await eventsPromise}
			<p class="text-center">Termine werden geladen...</p>
		{:then events}
			{#each events as card}
				<div class="relative group">
					{#if darkModeLocal}
						<div
							class="absolute -inset-0.5 -mt-1 -mb-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
						/>
					{/if}
					<div class="flex justify-center w-full">
						<div
							class="flex flex-col md:flex-row rounded-lg bg-white dark:bg-gray-950 drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer w-full"
						>
							<div class="mt-8 md:ml-8 md:mt-8 md:mb-8 text-center md:w-40">
								<h1 class="text-lime-500 text-5xl md:text-4xl">
									{asDate(card.data.date)?.getDate()}
								</h1>
								<p class="text-black dark:text-white text-sm overflow-auto">
									{months[asDate(card.data.date)?.getMonth() ?? 0]}
									{asDate(card.data.date)?.getFullYear()}
								</p>
								<p class="text-black dark:text-white text-sm">
									{getFormattedTime(asDate(card.data.date) ?? new Date())}
								</p>
							</div>
							<div class="p-8 pb-0 md:ml-8 ma-4 flex flex-col justify-start">
								<h5 class=" text-gray-900 dark:text-white text-xl font-medium mb-2">
									{card.data.title[0]?.text}
								</h5>
								<p class="text-gray-700 dark:text-white text-base mb-8 md:mr-8">
									<PrismicRichText field={card.data.description} />
								</p>
								{#if card.data.link.url}
									<PrismicLink field={card.data.link} class="text-lime-500 text-base mb-8 md:mr-8">
										Anmeldung & Details
									</PrismicLink>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		{:catch error}
			<p class="text-red-500 text-center">Termine konnten nicht geladen werden!</p>
		{/await}
	</div></BaseComponent
>
