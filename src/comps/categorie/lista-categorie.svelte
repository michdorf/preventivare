<script lang="ts">
    import type { Writable } from 'svelte/store';
    import type Categoria from '../../interfacce/categoria';
    import format from '../../ts/ammonta-formatter';

    import Categorie from '../../servizio/categorie'

    let cat = Categorie.data as Writable<Categoria[]>;
</script>

{#each $cat as categoria}
    <b>{categoria.titolo}</b>
    <p>{format(categoria.stima)}</p>
{/each}