<script>
	import hb from '$lib/images/hackaburg.svg';
	import mint from '$lib/images/mint.svg';
	import science from '$lib/images/science.svg';
	import free from '$lib/images/free.svg';
	import student from '$lib/images/student.svg';

	import BaseComponent from '../components/BaseComponent.svelte';

	let cards = [
		{
			title: 'Kostenlose Events',
			description:
				'Dein Geldbeutel sollte keine Hürde sein, um an einem unseren Events teilzunehmen. Daher sind alle unsere Events kostenlos. Wie wir das schaffen? - Komm doch einfach mal bei einer Vereinsitzung vorbei.',
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
		<div class="w-full md:w-1/2">
			<p class="text-black">
				Als gemeinnütziger Verein sorgen wir dafür, dass Menschen in der Region Regensburg wissen,
				welche Möglichkeiten unsere schöne Stadt zu bieten hat. Deshalb organisieren wir Events
				nicht nur für Schüler*Innen, sondern auch Erwachsene und Professionals. Unser Ziel ist es,
				vor alem die IT-Szene in der Domstadt zu vernetzen, aber wir haben noch mehr geplant.
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
