<script lang="ts">
import type { Writable } from 'svelte/store';
import type Categoria from '../../interfacce/categoria';
import format from '../../ts/ammonta-formatter';
import Categorie from '../../servizio/categorie'
import { createEventDispatcher } from 'svelte';

let dispatch = createEventDispatcher<{select: string}>();

let cat = Categorie.data as Writable<Categoria[]>;
let select = (v: string) => dispatch('select', v);
</script>

{#each $cat as categoria}
    <div on:click={() => select(categoria.id)}>
        <b>{categoria.titolo}</b>
        <p>{format(categoria.stima)}</p>
    </div>
{/each}