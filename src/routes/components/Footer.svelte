<script>
	import logo from '$lib/images/rb_logo.svg';
</script>

<footer class="p-4 bg-black sm:p-6">
	<div class="mx-auto max-w-screen-xl">
		<div class="md:flex md:justify-between mt-8">
			<div class="mb-12 md:mb-0 ml-20 w-1/2 sm:gap-6 sm:grid-cols-1 lg:grid-cols-1">
				<a href="/" class="flex items-center">
					<img src={logo} class="mr-3 h-8 invert" alt="ratisbona coding e.V. Logo" />
				</a>
				<p class="max-w-xs mt-4 text-sm text-white">
					Schön, dass ihr auf unserer Website vorbeigeschaut habt. Mehr über uns findet ihr auf
					unseren Social-Media Kanälen.
				</p>

				<p class="w-1/2 text-sm mt-8 font-normal text-white">Made with 💚 in Regensburg</p>
				<div class="mt-4 flex space-x-2 text-white">
					<!-- svelte-ignore security-anchor-rel-noreferrer -->
					<a href="https://github.com/ratisbona-coding" target="_blank">
						<!-- Github -->
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="social-icon"
							><path
								fill="currentColor"
								d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
							/></svg
						>
					</a>

					<!-- Instagram -->
					<!-- svelte-ignore security-anchor-rel-noreferrer -->
					<a href="https://www.instagram.com/ratisbonacoding" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="social-icon"
							><path
								fill="currentColor"
								d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
							/></svg
						></a
					>

					<!-- Linkedin -->
					<!-- svelte-ignore security-anchor-rel-noreferrer -->
					<a href="https://www.linkedin.com/company/ratisbona-coding" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="social-icon"
							><path
								fill="currentColor"
								d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
							/></svg
						></a
					>

					<!-- Discord -->
					<!-- svelte-ignore security-anchor-rel-noreferrer -->
					<a href="https://discord.gg/6dUkTU47" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="social-icon"
							><path
								fill="currentColor"
								d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
							/></svg
						></a
					>

					<!-- Facebook -->
					<!-- svelte-ignore security-anchor-rel-noreferrer -->
					<a href="https://www.facebook.com/hackaburg" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="social-icon"
							><path
								fill="currentColor"
								d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
							/></svg
						></a
					>

					<!-- Youtube -->
					<!-- svelte-ignore security-anchor-rel-noreferrer -->
					<a href="https://www.youtube.com/channel/UC-92ptcdIrZH5HOQ9fRX1Tw" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="social-icon"
							><path
								fill="currentColor"
								d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
							/></svg
						>
					</a>
				</div>
			</div>
			<div class="grid grid-cols-1 ml-8 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-2">
				<div>
					<h2 class="mb-6 ml-12 text-md font-bold text-white uppercase dark:text-white">Verein</h2>
					<ul class="ml-12 text-white dark:text-gray-400">
						<li class="mb-4">
							<a href="/datenschutz" class="hover:underline">Datenschutz</a>
						</li>
						<li class="mb-4">
							<a href="/impressum" class="hover:underline">Impressum</a>
						</li>
						<li class="mb-4">
							<a href="/mitglied-werden" class="hover:underline">Mitgliedsantrag</a>
						</li>
						<li class="mb-4">
							<a href="/satzung" class="hover:underline">Satzung</a>
						</li>
					</ul>
				</div>
				<div class="grid-cols-1 ml-12 md:mr-32 w-full sm:gap-6 sm:grid-cols-1">
					<h2 class="mb-6 text-md font-bold text-white uppercase dark:text-white">Hackathon</h2>
					<ul class="text-white dark:text-gray-400">
						<li class="mb-4">Hackaburg 2023 - coming soon</li>
						<li class="mb-4">
							<a href="https://www.hackaburg.de" class="hover:underline">Hackaburg 2022</a>
						</li>
						<li class="mb-4">
							<a href="https://www.hackaburg.de/2019" class="hover:underline">Hackaburg 2019</a>
						</li>
						<li class="mb-4">
							<a href="https://www.hackaburg.de/2018" class="hover:underline">Hackaburg 2018</a>
						</li>
						<li class="mb-4">
							<a href="https://www.hackaburg.de/2017" class="hover:underline">Hackaburg 2017</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">Hackaburg 2016</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</footer>

<style scoped>
	.social-icon {
		@apply w-5 h-5 hover:text-gray-400 hover:cursor-pointer;
	}
</style>
