<script lang="ts">
import uuid from "../../../moduli/memo/uuid";
import Spese from '../../servizio/spese';
import type Categoria from "../../interfacce/categoria";
import type Spesa from "../../interfacce/spesa";
import AmmontaSelect from "../ammonta-select.svelte";
import CategoriaSelect from '../categorie/select.svelte';

export let categoria: Categoria;

let spesa = {
    id: uuid(),
    titolo: '',
    categoria: categoria,
    etichette: [],
    commento: '',
    ammonta: '0:dkk',
    pagato: true,
    data: new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 3),
    /* ripeti: new Ricorrente(), */
    creato: new Date()
} as Spesa;

let dataInput = spesa.data.toISOString().split('T')[0];
$: {
    spesa.data = new Date(dataInput);
}

function salva() {
    Spese.agg(spesa);
}
</script>

<h1>Tilføj udgift til {categoria.titolo}</h1>
<input bind:value={spesa.titolo}/><br>
<CategoriaSelect curCategoria={spesa.categoria} on:change={(e) => spesa.categoria = e.detail}></CategoriaSelect>{spesa.categoria.titolo}<br>
<input bind:value={spesa.etichette} placeholder="Etichette"/><br>
<textarea bind:value={spesa.commento} placeholder="Commento"></textarea><br>
<AmmontaSelect bind:value={spesa.ammonta}></AmmontaSelect><br>
<label for='pagato'>Pagato?</label><input id="pagato" type="checkbox"/><br>
<input bind:value={dataInput} type="date" placeholder="Data"/><br>
<button on:click={salva}>Salva</button>