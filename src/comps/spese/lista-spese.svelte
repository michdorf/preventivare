<script lang="ts">
import type { Writable } from "svelte/store";
import type Spesa from "../../interfacce/spesa";
import Spese from "../../servizio/spese";

$: sp = Spese.data as Writable<Spesa[]>;
</script>
{#each $sp as spesa}
    <h1>{spesa.titolo}</h1>
    <b>{spesa.categoria.titolo}</b>
    <p>{spesa.ammonta}</p>
    <p>{spesa.etichette}</p>
    <p>{spesa.data}</p>
    <p>{spesa.commento}</p>
{/each}