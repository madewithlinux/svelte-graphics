<script lang="ts">
  import type { Tweened } from "svelte/motion";
  import Timer from "../../lib/Timer.svelte";
  import Squares from "./Squares.svelte";

  let frameTime: Tweened<number>;
</script>

<main>
  <Timer maxFrameTime={100} bind:frameTime />
  {#if frameTime}
    <Squares {frameTime} />
  {/if}
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
