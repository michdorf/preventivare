<script lang="ts">
import type { Writable } from 'svelte/store';
import type Categoria from '../interfacce/categoria';

    import Categorie from '../servizio/categorie'

    let cat = Categorie.data as Writable<Categoria[]>;
</script>

{#each $cat as categoria}
    <p>{categoria.titolo} - {categoria.stima}</p>
{/each}