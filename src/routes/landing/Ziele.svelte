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
			title: 'Ministry of Plenty',
			description:
				'Look at this f**king pig. He\'s gonna be walking on two legs and tell us he\'s more equal than us if we\'re not careful enough.',
			image: free
		},
		{
			title: 'Ministry of Truth',
			description:
				'Hey guys, did you know that in terms of human companionship, Flareon is objectively the most huggable Pokemon? You didn\'t? They did. And they tried to hide this information from you.',
			image: student
		},
		{
			title: 'Ministry of Love',
			description:
				'Love is a drug meant to subjugate the masses by using their emotions against them. Do not trust any person who appears to display affection towards you.',
			image: science
		},
		{
			title: 'Freedom',
			description:
				'Under the spreading chestnut <a href="secret.7z" onclick="return false;">tree</a>, Where I knelt upon my knee, We were as happy as could be, \'Neath the spreading chestnut tree.',
			image: hb
		},
		{
			title: 'Ministry of Peace',
			description:
				'Peace is peaceful. Peaceful peace. Wake up to peace. Go to sleep to peaceful peace is peacefulness to your heart Your heart is brain dead but... At least it\'s at peace,',
			image: mint
		}
	];
</script>

<BaseComponent headline={'Their goals'} id={'ziele'}>
	<div class="flex items-center flex-wrap mb-20 z-1 relative">
		<div class="w-full">
			<p class="text-black dark:text-white">
				The newly popular party i̷̹̙͠n̷̢̬̼͒g̴̛̙̕s̶̨̺̎̓ö̶͜ċ̵̰̳̅͝ is trying to buy your vote by t̷̝͗e̸̬̊ĺ̸̫l̷̫̇ī̷̳n̷͎͠g̶̹̈́ y̷͖̥̑̈́o̷͉̰͗̓́u̴̞̿̋̈́ ľ̴̜i̴̭͠e̷̡̼̒̆ṡ̷̭̃.
				They are manufacturing outrage based on ľ̴̜i̴̭͠e̷̡̼̒̆ṡ̷̭̃. They have ties to f̶̼̱̈o̵͔̐r̷̡̚̚ẽ̶ͅï̴͚͚̆g̶̞̙̒n̵̟̳͂̕ ̷͚̙̊́g̶̯̲͛͘ŏ̵̱v̷̫̻͒ḛ̷̻̅̏r̶̪̫͂ņ̶̗̄m̷̙̰̈́ē̸̻̭n̷̠̽ẗ̶̖́́s̴̺͑̔
				in order to keep the truth from us. O̷͙͊̑n̵̰͖͠c̸͙̮͝ē̸̢͛ͅ ̵̳͘͠i̴̧̤̔ň̵͉̯̀ ̸̰̉c̷̎̍ͅh̸̝́͝a̴͉̿ŕ̵̩͙͒g̴̖̈́ė̵̬̯̀,̴̩̖̈́ ̴̩̀o̷̯̣̽ù̵̙̲͂ṛ̴͊̑ ̶̨̼̀̃l̶͕̋̈́i̷͙͔̓̕v̶̯̝́ĕ̶̬̽ŝ̴̥̰ ̸͇̝͗̎w̸̫̃ị̸̰̓l̶̦̗̽ļ̴͝ ̴͙͔͗b̶̼̐̂ë̵͎́c̷̜͔̾o̵̯̹̽m̷̩̏́ê̴̞̓ a living hell.
				Let us try to keep them from gaining even more power. Our vote matters, our strength in
				numbers can topple their plans. Find us to gather plans.
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

					<p class="text-gray-700 text-base mb-4 dark:text-white">{@html card.description}</p>
				</div>
			</div>
		{/each}
	</div>
</BaseComponent>
