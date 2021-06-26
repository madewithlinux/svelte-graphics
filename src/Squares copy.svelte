<script lang="typescript">
  import { interpolate } from "d3-interpolate";
  import { floor, map, reverse, slice } from "lodash";
  import { loop_guard } from "svelte/internal";

  import type { Tweened } from "svelte/motion";
  import { tweened } from "svelte/motion";

  const keyframes = [
    { index: 0, scale: 1, rotate: 0 },
    { index: 1, scale: 0.75, rotate: 90 },
    { index: 2, scale: 0.5, rotate: 0 },
  ];

  const data: Tweened<typeof keyframes[0]> = tweened(keyframes[0], {
    duration: (from, to) => {
      return Math.abs(from.scale - to.scale) * 6000;
    },
    interpolate: interpolate,
  });

  let frameWidth = 1.5;

  $: transform = `rotate(${$data.rotate}) scale(${$data.scale})`;

  $: currentKeyframeIndex = Math.min(Math.floor($data.index), keyframes.length - 1);
  $: nextKeyframeIndex = Math.min(Math.floor($data.index) + 1, keyframes.length - 1);
  $: currentKeyframe = keyframes[currentKeyframeIndex];
  $: nextKeyframe = keyframes[nextKeyframeIndex];
  $: interpolator = interpolate(currentKeyframe, nextKeyframe);

  const on_input = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
    const currentKeyframeIndex = Math.min(Math.floor(e.currentTarget.valueAsNumber), keyframes.length - 1);
    const nextKeyframeIndex = Math.min(Math.floor(e.currentTarget.valueAsNumber) + 1, keyframes.length - 1);
    const currentKeyframe = keyframes[currentKeyframeIndex];
    const nextKeyframe = keyframes[nextKeyframeIndex];
    const interpolator = interpolate(currentKeyframe, nextKeyframe);
    const newData = interpolator(e.currentTarget.valueAsNumber - currentKeyframeIndex);
    // console.log(
    //   e.currentTarget.valueAsNumber,
    //    currentKeyframeIndex,
    //    newData
    // )
    data.set(newData, { duration: 0 });
    // if (e.currentTarget.value === e.currentTarget.max) {
    //   // special case for right end
    //   data.set(keyframes[keyframes.length - 1], { duration: 0 });
    // } else {
    //   const newData = interpolator(e.currentTarget.valueAsNumber % 1);
    //   data.set(newData, { duration: 0 });
    // }
  };
</script>

<div class="buttons">
  <button on:click|self={() => data.set(keyframes[0], { duration: 0 })}>reset</button>
  <button 
    on:click|self={async () => {
      for (const keyframe of keyframes.slice(0, currentKeyframeIndex + 1).reverse()) {
        await data.set(keyframe);
      }
    }}
  >to begin</button>
  <button
    on:click|self={async () => {
      for (const keyframe of keyframes.slice(currentKeyframeIndex + 1)) {
        await data.set(keyframe);
      }
    }}>to end</button
  >
  <button
    on:click|self={() => {
      data.update(($data, interpolated) => {
        console.log($data, interpolated);
        return interpolated;
      });
    }}>pause</button
  >
  <input
    type="range"
    value={$data.index}
    min="0"
    max={keyframes.length - 1}
    step="0.01"
    on:input={on_input}
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
