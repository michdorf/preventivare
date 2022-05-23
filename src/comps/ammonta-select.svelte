<script lang="ts">
import { createEventDispatcher } from "svelte";
import type Ammonta from "../interfacce/ammonta";
import ValutaSelect from "./valuta-select.svelte";

let dispatcher = createEventDispatcher<{change: Ammonta}>();

let stima = 0;
export let valuta = 'dkk';
const input = stima + ':' + valuta as Ammonta;

export let value = input;
$: {
    value = stima + valuta as Ammonta;
}
</script>

<input bind:value={stima} placeholder="Estimat" /> 
<ValutaSelect bind:value={valuta}></ValutaSelect><br>