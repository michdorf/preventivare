<script lang="ts">
import { createEventDispatcher } from "svelte";

import { derived, get, Writable } from "svelte/store";
import type Categoria from "../../interfacce/categoria";
import categorie from "../../servizio/categorie";

let dispatch = createEventDispatcher<{change: Categoria}>();
export let nascCategoria: string = "";
let idSelezionato = '';
    
let c = derived(categorie.data as Writable<Categoria[]>, value => {
    return value.filter((v) => v.id !== nascCategoria);
});

function onChange(e: Event) {
    let target = e.target as HTMLSelectElement;
    idSelezionato = target.value;
    dispatch('change', get(categorie.data).find(v => v.id === idSelezionato));
}
</script>

<select on:change={onChange}>
    <optgroup label="Vælg en overkategori">
        {#each $c as categoria}
            <option value={categoria.id}>{categoria.titolo}</option>
        {/each}
        <option value="" selected>Ingen</option>
    </optgroup>
</select>