<div class="pagina" transition:slide={{duration: 200}}>
    <button on:click={nascondi} style="float: right">X</button>
    <slot></slot>
</div>

<script lang="ts">
    import {slide} from 'svelte/transition';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function nascondi() {
        dispatch("nascondi");
    }
</script>

<style>
    .pagina {
        box-sizing: border-box;
        padding: 0.6em;
        box-shadow: 0 -0.1em 0.4em 0 rgba(0,0,0,0.3);
        background-color: var(--bg-color);
        height: 95vh;
        width: 100%;
        position: fixed;
        bottom: 0; 
        border-radius: var(--border-radius) var(--border-radius) 0 0
    }
</style>