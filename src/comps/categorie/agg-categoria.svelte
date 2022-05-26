<script lang="ts">
import uuid from "../../../moduli/memo/uuid";

import type Categoria from "../../interfacce/categoria";
import categorie from "../../servizio/categorie";
import AmmontaSelect from "../ammonta-select.svelte";
import CategoriaSelect from './select.svelte';

let c: Categoria = {
    id: uuid(),
    titolo: 'Test',
    parente: null,
    stima: '22:eur',
    creato: Date.now()
};

let categoriaSelezionato: Categoria;

$: {
    if (typeof categoriaSelezionato === 'object') {
        c.parente = categoriaSelezionato.id;
    }
}
</script>

<input bind:value={c.titolo} placeholder="Titel" /> <br>
<CategoriaSelect on:change={(e) => c.parente = e.detail.id}></CategoriaSelect> <br>

<AmmontaSelect bind:value={c.stima}></AmmontaSelect><br>
<button on:click={() => {categorie.agg(c)}}>Click</button>