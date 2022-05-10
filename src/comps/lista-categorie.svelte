<script lang="ts">
import type { Writable } from 'svelte/store';
import type Categoria from '../interfacce/categoria';

    import Categorie from '../servizio/categorie'

    let cat: Writable<Categoria[]> = Categorie.data
</script>

{#each $cat as categoria}
    <p>{categoria.titolo} - {categoria.stima}</p>
{/each}