<script lang="ts">
  import squaresUrl from '../squares/index.html?url'
  // import squaresUrl2 from '../squares/index.html?url'
  // new URL('./', import.meta.url)
</script>

<main>
  <h1>svelte graphics</h1>

  {squaresUrl}

  <ul>
    <li>
      <!-- <a href="../squares/index.html">squares</a>   -->
      <a href="/svelte-graphics/src/pages/squares/index.html">squares</a>
    </li>
  </ul>
</main>

<style>
  main {
    padding: 2rem;
    margin: 0 auto;
    display: flex;
    /* flex-direction: row; */
    flex-direction: column;
    justify-content: space-between;
  }
</style>
