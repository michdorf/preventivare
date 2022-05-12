<script lang="ts">
import uuid from "../../../moduli/memo/uuid";
import type Ammonta from "../../interfacce/ammonta";

    import type Categoria from "../../interfacce/categoria";
    import categorie from "../../servizio/categorie";
import ValutaSelect from "../valuta-select.svelte";

    let c: Categoria = {
        id: uuid(),
        titolo: 'Test',
        parente: null,
        stima: '22:eur',
        creato: Date.now()
    };

    let stima = 0;
    $: {
        c.stima = (stima + ':' + 'dkk' as Ammonta);
    }
</script>

<input bind:value={c.titolo} placeholder="Titel" /> <br>
<select>
    <optgroup label="Vælg en overkategori">
        <option value="" selected>Ingen</option>
    </optgroup>
</select> <br>

<input bind:value={stima} placeholder="Estimat" /> <ValutaSelect></ValutaSelect><br>
<button on:click={() => {categorie.agg(c)}}>Click</button>