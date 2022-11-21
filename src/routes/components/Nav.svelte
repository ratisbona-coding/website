<script>
	import logo from '$lib/images/rb_logo.svg';

	let menuOpen = true;

	function toggle() {
		menuOpen = !menuOpen;
	}
</script>

<nav
	class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
>
	<div class="container flex flex-wrap items-center justify-between mx-auto">
		<a href="https://ratisbona-coding.org" class="flex items-center">
			<img src={logo} class="h-6 mr-3 sm:h-9" alt="Ratisbona Logo" />
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
				class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-gray-900 dark:border-gray-700"
			>
				<li>
					<a href="/" class="nav-element-base" aria-current="page">Home</a>
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
					<a href="/#termine" class="nav-element-base">Termine</a>
				</li>
				<li>
					<a href="/#kontakt" class="nav-element-base">Kontakt</a>
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
