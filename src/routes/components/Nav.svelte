<script>
	import logo from '$lib/images/rb_logo.svg';
	import logo_white from '$lib/images/rb_logo_white.svg';

	let menuOpen = true;

	function toggle() {
		menuOpen = !menuOpen;
	}

	import { darkMode } from '../store';

	let darkModeLocal = false;

	const unsubscribe = darkMode.subscribe((value) => {
		darkModeLocal = value;
	});

	function handleSwitchDarkMode() {
		darkModeLocal = !darkModeLocal;
		darkMode.set(darkModeLocal);
		darkModeLocal
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

<nav
	class="bg-white px-2 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
>
	<div class="container flex flex-wrap items-center justify-between mx-auto">
		<a href="https://ratisbona-coding.org" class="flex items-center">
			<img src={darkModeLocal ? logo_white : logo} class="h-6 mr-3 sm:h-9" alt="Ratisbona Logo" />
		</a>
		<div>
			<button
				data-collapse-toggle="navbar-sticky"
				type="button"
				class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-sticky"
				aria-expanded="false"
				on:click={toggle}
			>
				<span class="sr-only">Open main menu</span>
				<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
					><path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>
		<div class={menuOpen ? ' menu hidden' : 'menu'}>
			<ul
				class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700"
			>
				<li>
					<a href="/" class="nav-element-base" aria-current="page">Home</a>
				</li>
				<li>
					<a href="/#termine" class="nav-element-base">Termine</a>
				</li>
				<li>
					<a href="/#about" class="nav-element-base">Über uns</a>
				</li>
				<li>
					<a href="/#ziele" class="nav-element-base">Unsere Ziele</a>
				</li>
				<li>
					<a href="/#projekte" class="nav-element-base">Projekte</a>
				</li>
				<li>
					<a href="/#mitglied-werden" class="nav-element-base">Mitglied werden</a>
				</li>
				<li>
					<a href="/#kontakt" class="nav-element-base">Kontakt</a>
				</li>
				<li>
					{#if darkModeLocal}
						<button
							type="button"
							class="block flex items-center text-white hover:text-green-500 font-medium nav-element-base"
							data-hs-theme-click-value="dark"
							on:click={handleSwitchDarkMode}
						>
							<svg
								class="flex-shrink-0 w-4 h-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
							>
						</button>
					{/if}
					{#if !darkModeLocal}
						<button
							type="button"
							class="flex items-center text-black hover:text-green-500 font-medium nav-element-base"
							data-hs-theme-click-value="light"
							on:click={handleSwitchDarkMode}
						>
							<svg
								class="flex-shrink-0 w-4 h-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><circle cx="12" cy="12" r="4" /><path d="M12 8a2 2 0 1 0 4 4" /><path
									d="M12 2v2"
								/><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path
									d="m17.66 17.66 1.41 1.41"
								/><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path
									d="m19.07 4.93-1.41 1.41"
								/></svg
							>
						</button>
					{/if}
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	.nav-element-base {
		@apply block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700;
	}
	.menu {
		@apply items-center justify-between w-full md:flex md:w-auto md:order-1;
	}
</style>
