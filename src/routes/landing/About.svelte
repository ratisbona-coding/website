<script>
	import timeline from '$lib/images/timeline.svg';
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Über uns'} id={'about'}>
	<div class="w-full md:w-1/2">
		<p class="text-black">
			Wir sind der ratisbona-coding e.V., ein <strong>gemeinnütziger</strong> Verein aus Regensburg.
			Wir haben uns <strong>2018</strong> aus dem studentischen Organisationsteam des
			<strong>Hackaburg Hackathons</strong>
			gegründet. Wir als junger Verrein organisieren neben der Hackaburg noch weitere
			<strong>IT-Events</strong>
			in der <strong>Region Regensburg</strong>.
		</p>

		<div class="items-center flex-wrap mb-30 mt-16 w-auto">
			<img class="mx-auto" src={timeline} alt="mockup" />
		</div>
	</div>
</BaseComponent>
