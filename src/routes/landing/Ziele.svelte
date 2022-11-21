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
				'In Regensburg studieren um die 32.000 junge Menschen. Daher wollen wir ihnen zeigen, was der IT Standort Regensburg zu bieten hat.',
			image: student
		},
		{
			title: 'Forschung',
			description:
				'Wi wollen Forschung und Entwicklung fördern bzw. Aufklärung im IT Bereich leisten.',
			image: science
		},
		{
			title: 'Allgemeinheit',
			description:
				'Wir versuchen auch ein breiteres Publikum anzusprechen. Die Förderung der Allgemeinbildung der Bevölkerung im Umgang mit neuen Technologien steht für uns im Mittelpunkt.',
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
				Wir als gemeinnütziger Verein wollen dafür sorgen, dass Menschen in unserer Region wissen,
				welche Möglichkeiten unsere Stadt bietet. Das erreichen wir durch das Organisieren von
				beispielsweise Events für Schüler*innen oder im Rahmen von Vorträge für Erwachsene zu
				schaffen. Wir wollen hierdurch die IT Szene in Regensburg besser miteinander vernetzen.
				Nachfolgend findet ihr unsere <b>Vereinsziele</b>.
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
