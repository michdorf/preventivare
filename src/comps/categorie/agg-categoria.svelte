<script lang="ts">
import uuid from "../../../moduli/memo/uuid";
import type Ammonta from "../../interfacce/ammonta";

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
</script>

<input bind:value={c.titolo} placeholder="Titel" /> <br>
<CategoriaSelect bind:value={c.parente}></CategoriaSelect> <br>

<AmmontaSelect bind:value={c.stima}></AmmontaSelect><br>
<button on:click={() => {categorie.agg(c)}}>Click</button>