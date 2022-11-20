<script>
	import mitgliedBlob from '$lib/images/mitgliederBlob.png';
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Mitglied werden'} id={'member'}>
	<div class="header block">
		<div class="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
			<div class="m-auto lg:mr-auto place-self-center lg:col-span-5">
				<h2
					class="max-w-xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white"
				>
					Wir brauchen dich!
				</h2>
				<p
					class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
				>
					Damit wir richtig durchstarten können!
				</p>
				<a href="docs/mitgliedsantrag-ratisbona-coding.pdf" target="_blank">
					<button
						class="border-2 border-gray-800 rounded-3xl px-3 py-2 text-gray-800 cursor-pointer hover:bg-gray-800 hover:text-gray-200 w-full"
						>Mitgliedsantrag</button
					>
				</a>
			</div>

			<!--div class="hidden lg:mt-0 lg:col-span-7 lg:flex relative float-right ">
			<img class="" src={mitgliedBlob} alt="mockup" />
		</div-->
		</div>
	</div>
</BaseComponent>
