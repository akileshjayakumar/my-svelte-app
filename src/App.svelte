<script>
  let name = '';
  let items = ['Item 1', 'Item 2', 'Item 3'];
  let show = true;
</script>

<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>

<button on:click={() => (show = !show)}>
  {show ? 'Hide' : 'Show'} Message
</button>

{#if show}
  <p>This is a conditional message.</p>
{/if}


<style>
  h1 {
    color: purple;
  }
</style>

<main>
  <h1>Hello {name || 'world'}!</h1>
  <input type="text" bind:value={name} placeholder="Enter your name" />
</main>
