<script>
	import BaseComponent from '../components/BaseComponent.svelte';
</script>

<BaseComponent headline={'Kontakt'} id={'kontakt'}>
	<form>
		<input
			type="text"
			id="large-input"
			placeholder="Dein Name"
			class="m-auto block w-2/3 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
		/>
		<input
			type="text"
			id="large-input"
			placeholder="Deine Mail"
			class="m-auto mt-6 block w-2/3 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
		/>
		<textarea
			rows="4"
			id="large-input"
			placeholder="Deine Nachricht an uns"
			class="m-auto mt-6 block w-2/3 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
		/>
	</form>
	<div class="flex flex-wrap items-center mb-32">
		<button
			class="m-auto w-52 mt-8 border-2 border-black rounded-3xl px-3 py-2 text-black hover:cursor-pointer hover:bg-black hover:text-gray-200"
			>Absenden</button
		>
	</div>
</BaseComponent>
