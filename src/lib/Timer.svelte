<script lang="typescript">
  import { interpolate } from "d3-interpolate";

  import type { Tweened } from "svelte/motion";
  import { tweened } from "svelte/motion";

  const { min, max, abs, floor, ceil } = Math;

  export let minFrameTime: number = 0;
  export let maxFrameTime: number;
  export const frameTime: Tweened<number> = tweened(minFrameTime, {
    duration: (from, to) => abs(from - to) * 1000,
  });
</script>

<div class="timer">
  <div class="buttons">
    <button on:click|self={() => frameTime.set(0, { duration: 0 })}>reset</button>
    <button on:click|self={() => frameTime.set(0)}>reverse</button>
    <button on:click|self={() => frameTime.set(maxFrameTime)}>forward</button>
    <button on:click|self={() => frameTime.update((_, interpolated) => interpolated)}>pause</button>
  </div>
  <input
    type="range"
    value={$frameTime}
    min="0"
    max={maxFrameTime}
    step="0.01"
    on:input={(e) => frameTime.set(e.currentTarget.valueAsNumber, { duration: 0 })}
  />
</div>

<style>

  .timer {
    display: flex;
    flex-direction: column;
  }

  .buttons {
    /* min-width: max-content; */
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 10px;
  }

  .buttons > button {
    font-size: inherit;
    margin: 5px;
    padding: 10px;
  }
  input[type="range"] {
    /* height: 50px; */
  }
</style>
