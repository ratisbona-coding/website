<script>
	import mitgliedBlob from '$lib/images/mitgliederBlob.png';
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Mitglied werden'} id={'mitglied-werden'}>
	<div class="header block">
		<div class="m-auto lg:mr-auto place-self-center lg:w-1/3">
			<!--h2
				class="max-w-xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white"
			>
				Wir brauchen dich!
			</h2-->
			<p
				class="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
			>
				Damit wir richtig durchstarten können, brauchen wir dich!
			</p>
			<a href="docs/mitgliedsantrag-ratisbona-coding.pdf" target="_blank">
				<button
					class="border-2 border-black rounded-3xl px-3 py-2 text-black cursor-pointer hover:bg-black hover:text-gray-200 w-full"
					>Mitgliedsantrag</button
				>
			</a>

			<!--div class="hidden lg:mt-0 lg:col-span-7 lg:flex relative float-right ">
			<img class="" src={mitgliedBlob} alt="mockup" />
		</div-->
		</div>
	</div>
</BaseComponent>
