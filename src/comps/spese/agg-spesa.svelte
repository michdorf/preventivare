<script lang="ts">
import { derived } from "svelte/store";
import uuid from "../../../moduli/memo/uuid";
import type Spesa from "../../interfacce/spesa";
import categorie from "../../servizio/categorie";
import CategoriaSelect from '../categorie/select.svelte';

export let categoria: string;

// Reactive perche se no, se categoria cambia non si aggiorna il store
$: c = derived(categorie.data, cat => cat.filter(v => v.id == categoria)[0]);

$: spesa = {
    id: uuid(),
    titolo: '',
    categoria: $c,
    etichette: [],
    commento: '',
    ammonta: '0:dkk',
    pagato: true,
    data: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    /* ripeti: new Ricorrente(), */
    creato: new Date()
} as Spesa;
</script>

<h1>Tilføj udgift til {$c.titolo}</h1>
<input bind:value={spesa.titolo}/>
<CategoriaSelect bind:value={spesa.categoria.id}></CategoriaSelect>
<input bind:value={spesa.ammonta}/>

