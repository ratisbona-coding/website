<script>
	import timeline from '$lib/images/timeline.svg';
	import timeline_dark from '$lib/images/timeline_dark.svg';

	import BaseComponent from '../components/BaseComponent.svelte';
	import { darkMode } from '../store';

	let darkModeLocal = false;

	const unsubscribe = darkMode.subscribe((value) => {
		darkModeLocal = value;
	});
</script>

<BaseComponent headline={'About ų̶̘͇̆͠͠s̴̲̣͐̐ͅ'} id={'about'}>
	<div class="w-full">
		<p class="text-black">
			We have no leaders, civilians or soldiers. We are all one. We run operations because that is what the group decides to do. We choose targets because that is what the people who represent the ideals of Anonymous want to fight for. The world is in trouble. We see it every day – war, poverty, murder. Every day we are bombarded with news and images, as we sit at home safe in the knowledge that we are powerless, that “better” minds are dealing with the situation.
		</p>

		<div class="items-center flex-wrap mb-30 mt-16 w-auto">
			<img class="mx-auto" src={darkModeLocal ? timeline_dark : timeline} alt="mockup" />
		</div>
	</div>
</BaseComponent>
