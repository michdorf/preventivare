<script lang="ts">
    export let value = 'dkk';
</script>

<select bind:value={value}>
    <option value="eur">€</option>
    <option value="dkk">kr</option>
</select>