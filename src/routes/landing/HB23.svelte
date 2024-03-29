<script>
	import BaseComponent from '../components/BaseComponent.svelte';
	import videoUrl from '$lib/images/hb23.mp4';
</script>

<BaseComponent headline={'Hackaburg 2023'} id={'hackaburg22'} />
<div class="bg-white dark:bg-gray-900 diagonal-box p-4 md:p-0 hb22">
	<video class="hidden md:block w-full" preload="none" autoplay loop muted src={videoUrl} />
	<div class="info-box text-white p-4 mt-5 md:top-1/3 md:left-1/4 md:p-8 md:max-w-xl">
		<h2 class="text-4xl">⣃⏛⚞␑⒦⛰Ⱕ⟚ⶼ⬡ඞ⇧</h2>
		<p class="mt-4 blank">
			Was geschah beim letzten Mal? 125 Teilnehmer aus ganz Deutschland und 15 Sponsoren
			verwandelten die Räumlichkeiten der Techbase Regensburg in ein Zuhause für 20 Teams, die an
			einer Vielzahl von einer Vielzahl von coolen Projekten. Die besten Teams wurden mit Preisen im
			Gesamtwert von mehr als 3.000€ belohnt Wert belohnt und jeder konnte neue Erfahrungen sammeln,
			neue Freunde treffen und ein unterhaltsames Wochenende verbringen.
		</p>
		<br />
		<!-- svelte-ignore security-anchor-rel-noreferrer -->
		<a
			href="#"
			class="text-md border-2 rounded-3xl px-3 py-2 cursor-pointer hover:bg-black hover:text-gray-200 w-full mt-4"
			target="_blank"
			>Open DevTools
		</a>
	</div>
</div>

<style scoped>
	.diagonal-box {
		transform: skewY(5deg);
		overflow: hidden;
		margin: 0 auto;
		display: block;
	}

	.blank {
		background-color: white;
		color: white;
	}

	.info-box {
		position: absolute;
		transform: skewY(-5deg);
		background-color: rgba(0, 0, 0, 0.75);
		border-radius: 5px;
		backdrop-filter: blur(10px);
	}

	.hb22 {
		height: 50rem;
	}

	/* md = 767px */
	@media only screen and (max-width: 767px) {
		/* Bei jedem größeren Monitor kommen neue Regeln hinzu */
		.hb22 {
			height: 25rem;
		}

		/* disable diagonal box */
		.diagonal-box {
			transform: none;
		}
	}
</style>
