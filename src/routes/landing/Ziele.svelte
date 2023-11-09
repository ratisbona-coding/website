<script>
	import hb from '$lib/images/hackaburg.svg';
	import mint from '$lib/images/mint.svg';
	import science from '$lib/images/science.svg';
	import free from '$lib/images/free.svg';
	import student from '$lib/images/student.svg';
	import { darkMode } from '../store';

	import BaseComponent from '../components/BaseComponent.svelte';

	let darkModeLocal = false;

	const unsubscribe = darkMode.subscribe((value) => {
		darkModeLocal = value;
	});

	let cards = [
		{
			title: 'Kostenlose Events',
			description:
				'Dein Geldbeutel sollte keine Hürde sein, um an einem unserer Events teilzunehmen. Denn alle unsere Events sind kostenlos. Wie wir das schaffen? Komm doch einfach mal bei einer Vereinssitzung vorbei.',
			image: free
		},
		{
			title: 'Studierende fördern',
			description:
				'In Regensburg studieren rund 32.000 junge Menschen. Daher wollen wir ihnen zeigen, was der IT Standort Regensburg zu bieten hat.',
			image: student
		},
		{
			title: 'Forschung',
			description:
				'Wir wollen nicht nur Forschung und Entwicklung fördern, sondern auch Aufklärung im Bereich IT leisten/betreiben.',
			image: science
		},
		{
			title: 'Allgemeinheit',
			description:
				'Unser Publikum ist groß: Die Förderung von Allgemeinbildung im Umgang mit neuen Technologien in der Bevölkerung steht für uns im Mittelpunkt.',
			image: hb
		},
		{
			title: 'MINT',
			description:
				'Wir versuchen in Kooperation mit unserem Partner, den MINT-Labs Regensburg, Kinder und Jugendliche besonders von dem I in MINT zu begeistern.',
			image: mint
		}
	];
</script>

<BaseComponent headline={'Unsere Ziele'} id={'ziele'}>
	<div class="flex items-center flex-wrap mb-20 z-1 relative">
		<div class="w-full">
			<p class="text-black dark:text-white">
				Als gemeinnütziger Verein sorgen wir dafür, dass Menschen in der Region Regensburg wissen,
				welche Möglichkeiten unsere schöne Stadt zu bieten hat. Deshalb organisieren wir Events
				nicht nur für Schüler*Innen, sondern auch Erwachsene und Professionals. Unser Ziel ist es,
				vor allem die IT-Szene in der Domstadt zu vernetzen, aber wir haben noch mehr geplant.
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-4 w-full">
		{#each cards as card}
			<div class="relative group">
				{#if darkModeLocal}
					<div
						class="absolute -inset-0.5 -mt-1 -mb-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
					/>
				{/if}
				<div
					class="relative p-4 col-span-1 bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow hover:shadow-md"
					style="min-height: 450px"
				>
					<div>
						<div class="relative block h-full">
							<img class="h-52 rounded-lg mx-auto" src={card.image} alt="kommt" />
						</div>
					</div>

					<h5 class="text-gray-900 text-xl font-medium my-4 dark:text-white">{card.title}</h5>

					<p class="text-gray-700 text-base mb-4 dark:text-white">{card.description}</p>
				</div>
			</div>
		{/each}
	</div>
</BaseComponent>
