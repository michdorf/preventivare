<script lang="ts">
import { createEventDispatcher } from "svelte";
import type { default as Ammonta, Valuta } from "../ts/ammonta";
import { toAmmonta } from "../ts/ammonta";
import ValutaSelect from "./valuta-select.svelte";

let stima = 0;
export let valuta: Valuta = 'dkk';
const input = stima + ':' + valuta as Ammonta;

export let value = input;
$: {
    value = toAmmonta(stima, valuta);
}
</script>

<input bind:value={stima} placeholder="Estimat" /> 
<ValutaSelect bind:value={valuta}></ValutaSelect><br>