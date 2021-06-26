<script lang="typescript">
  import type { Tweened } from "svelte/motion";
  import { tweened } from "svelte/motion";

  export let minFrameTime: number = 0;
  export let maxFrameTime: number;
  export const frameTime: Tweened<number> = tweened(minFrameTime, {
    duration: (from, to) => Math.abs(from - to) * 30,
  });
</script>

<div class="timer">
  <div class="buttons">
    <button on:click|self={() => frameTime.set(0, { duration: 0 })}>reset</button>
    <button on:click|self={() => frameTime.set(0)}>reverse</button>
    <button on:click|self={() => frameTime.set(maxFrameTime)}>play</button>
    <button on:click|self={() => frameTime.update((_, interpolated) => interpolated)}>pause</button>
    <button on:click|self={async () => {
      while (true) {
        await frameTime.set(maxFrameTime)
        await frameTime.set(0, { duration: 0 })
      }
    }}>loop</button>
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
    max-width: 100%;
    /* display: grid;
    grid-template-columns: 1fr;
    gap: 10px; */
    margin-bottom: 10px;
    display: flex;
  }

  .buttons > button {
    flex-grow: 1;
    font-size: inherit;
    margin: 5px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
  /* input[type="range"] {
    height: 50px;
  } */
</style>
