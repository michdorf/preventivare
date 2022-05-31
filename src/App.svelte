<script lang="ts">
import { get } from 'svelte/store'
import ListaCategorie from "./comps/categorie/lista-categorie.svelte";
import ListaSpese from './comps/spese/lista-spese.svelte';
import SlideUpCarta from './comps/slide-up-carta.svelte';
import AggCategoria from "./comps/categorie/agg-categoria.svelte";
import AggSpesa from "./comps/spese/agg-spesa.svelte";
import categorie from "./servizio/categorie";

let showSlideUpCarta = false;
let slideUpCartaProps = {};
let SlideUpCartaComp = null;

export let name: string;
let curCatId = "";
$: curCategoria = get(categorie.data).find(c => c.id === curCatId);

function mostraAggSpesa() {
	SlideUpCartaComp = AggSpesa;
	slideUpCartaProps = {categoria: curCategoria};
	showSlideUpCarta = true;
}
$: {
	if (showSlideUpCarta) {
		window.scrollTo(0,0);
	}
}
</script>

<main style={(showSlideUpCarta ? "transform:scale(0.98);" : "")}>
	<h1>Hello {name}!</h1>
	<ListaCategorie on:select={catId => {curCatId = catId.detail}}></ListaCategorie>
	<hr>
	<AggCategoria></AggCategoria>
	<hr>
	{#if curCategoria}
		<button on:click={mostraAggSpesa}>Aggiungi Spesa</button>
		<!-- <AggSpesa categoria={curCategoria}></AggSpesa> -->
	{/if}
	<hr>
	<ListaSpese></ListaSpese>
	<hr>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	{#if showSlideUpCarta}
	<SlideUpCarta on:nascondi={() => showSlideUpCarta = false}>
		<svelte:component this={SlideUpCartaComp} {...slideUpCartaProps}></svelte:component>
	</SlideUpCarta>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>