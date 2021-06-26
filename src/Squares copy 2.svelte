<script lang="typescript">
  import { interpolate } from "d3-interpolate";
  import { floor, map, reverse, slice } from "lodash";

  import type { Tweened } from "svelte/motion";
  import { tweened } from "svelte/motion";

  const keyframes = [
    { index: 0, scale: 1, rotate: 0 },
    { index: 1, scale: 0.75, rotate: 90 },
    { index: 2, scale: 0.5, rotate: 0 },
  ];

  const frameNumber: Tweened<number> = tweened(0, {
    duration: (from, to) => {
      return Math.abs(from - to) * 1000;
    },
    interpolate: interpolate,
  });

  let frameWidth = 1.5;

  $: currentKeyframeIndex = Math.min(Math.floor($frameNumber), keyframes.length - 1);
  $: nextKeyframeIndex = Math.min(Math.floor($frameNumber) + 1, keyframes.length - 1);
  $: currentKeyframe = keyframes[currentKeyframeIndex];
  $: nextKeyframe = keyframes[nextKeyframeIndex];
  $: interpolator = interpolate(currentKeyframe, nextKeyframe);
  $: data = interpolator($frameNumber - currentKeyframeIndex) ?? keyframes[0];
  $: transform = `rotate(${data.rotate}) scale(${data.scale})`;
</script>

<div class="buttons">
  <button on:click|self={() => frameNumber.set(0, { duration: 0 })}>reset</button>
  <button on:click|self={() => frameNumber.set(0)}>reverse</button>
  <button on:click|self={() => frameNumber.set(keyframes.length - 1)}>forward</button>
  <button on:click|self={() => frameNumber.update((_, interpolated) => interpolated)}>pause</button>
  <input
    type="range"
    value={$frameNumber}
    min="0"
    max={keyframes.length - 1}
    step="0.01"
    on:input={(e) => frameNumber.set(e.currentTarget.valueAsNumber, { duration: 0 })}
  />
</div>

<svg
  class="gears"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="{-frameWidth / 2},{-frameWidth / 2},{frameWidth},{frameWidth}"
  stroke="black"
  stroke-width={frameWidth / 640}
>
  <g {transform}>
    <rect x="-0.5" y="-0.5" width="1" height="1" />
  </g>
</svg>

<style>
  .gears {
    max-width: 640px;
    display: block;
  }

  .buttons {
    /* min-width: max-content; */
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .buttons > button {
    font-size: inherit;
    margin: 5px;
    padding: 10px;
  }
</style>
