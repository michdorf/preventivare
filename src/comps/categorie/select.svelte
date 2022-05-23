<script lang="ts">
import { derived, Writable } from "svelte/store";
import type Categoria from "../../interfacce/categoria";
import categorie from "../../servizio/categorie";

export let nascCategoria: string = "";
export let value: string = '';
    
let c = derived(categorie.data as Writable<Categoria[]>, value => {
    return value.filter((v) => v.id !== nascCategoria);
});
</script>

<select bind:value={value}>
    <optgroup label="Vælg en overkategori">
        {#each $c as categoria}
            <option value={categoria.id}>{categoria.titolo}</option>
        {/each}
        <option value="" selected>Ingen</option>
    </optgroup>
</select>