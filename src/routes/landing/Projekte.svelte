<script>
	import hackaburg from '$lib/images/hackaburg.svg';
	import hackaburgSchool from '$lib/images/hackaburg_school.svg';
	import hashcode from '$lib/images/hackaburg-hashcode.svg';
	import stammtisch from '$lib/images/hb-con-log.svg';

	let projects = [
		{
			organizer: 'Hackaburg',
			event: 'Hackathon',
			description:
				'Das Event, mit dem alles begann: Der Hackathon ist nach wie vor unser wichtiges Event und das Aushängeschild für unseren Verein.',
			image: hackaburg
		},
		{
			organizer: 'Hackaburg',
			event: 'Hackathon',
			description:
				'Kinder und Jugendliche für das Coden zu begeistern. Genau das ist die Idee hiter dem "kleinen" Ableger der Hackaburg.',
			image: hackaburgSchool
		},
		{
			organizer: 'Hackaburg',
			event: 'Stammtisch',

			description:
				'Rgelmäßiger Austausch und Vernetzen mit anderen IT-Interessierten oder Coder*Innen bei einem kühlen Getränk steht bei uns ganz hoch im Stellenwert.',
			image: stammtisch
		},
		{
			organizer: 'Google',
			event: 'Hashcode',

			description:
				'Hashcode ist ein jährlich von Google ausgerichteter Coding-Wettbewerb rund um den Globus. Unser lokal organisierter Hub lädt jährlich ein, sich bei Pizza den Aufgaben zu stellen.',
			image: hashcode
		}
	];
</script>

<section class="container mx-auto px-6 p-10" id="ziele">
	<h2 class="text-4xl font-bold text-center text-black-800 mb-8">Projekte</h2>
	<hr class="my-4 mx-auto w-20 h-1 bg-gray-800 rounded border-0 md:my-10 dark:bg-gray-700" />
	<div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-4 w-full">
		{#each projects as project}
			<div
				class="relative p-4 col-span-1 bg-white rounded-lg overflow-hidden mt-20"
				style="min-height: 250px"
			>
				<div class="mb-14">
					<div class="relative block h-full">
						<img class="h-80 rounded-lg mx-auto" src={project.image} alt="kommt" />
					</div>
				</div>
				<div class="mb-40 box-border h-32">
					<h4 class="text-gray-900 text-xl font-medium my-4 text-center">{project.organizer}</h4>
					<h2 class="text-gray-900 text-3xl font-medium my-4 text-center">{project.event}</h2>

					<p class="text-gray-400 text-base mt-10">{project.description}</p>
				</div>
				<button
					class="border-2 border-gray-800 rounded-3xl px-3 py-2 text-gray-800 cursor-pointer hover:bg-gray-800 hover:text-gray-200 w-full"
					>Mehr dazu</button
				>
			</div>
		{/each}
	</div>
</section>
