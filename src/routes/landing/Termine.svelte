<script lang="ts">
	import BaseComponent from '../components/BaseComponent.svelte';
	import termine from '$lib/termine.json';
</script>

<BaseComponent headline={'Termine'} id={'termine'}
	><div
		class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-10 mt-4 w-full mb-20"
	>
		{#each termine as card}
			<div class="flex justify-center w-full">
				<div
					class="flex flex-col md:flex-row rounded-lg bg-white drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer"
				>
					<div class="mt-8 md:ml-8 md:mt-8 md:mb-8 text-center md:w-40">
						<h1 class="text-lime-500 text-5xl md:text-4xl">{card.date.day}</h1>
						<p class="text-black text-sm overflow-auto">{card.date.month}</p>
						<p class="text-black text-sm">{card.date.time}</p>
					</div>
					<div class="p-8 pb-0 lg:p-0 md:ml-8 ma-4 flex flex-col justify-start">
						<h5 class=" text-gray-900 text-xl font-medium mb-2 ">{card.title}</h5>
						<p class="text-gray-700 text-base mb-8 md:mr-8">
							{card.description}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div></BaseComponent
>
