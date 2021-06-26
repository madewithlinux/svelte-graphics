<script lang="typescript">
  import type { Readable } from "svelte/store";
  import { derivedFrame } from "./lib/keyframe_utils";

  const keyframes = [
    { time: 0, scale: 1, rotate: 0 },
    { time: 1, scale: 0.75, rotate: 90 },
    { time: 2, scale: 0.5, rotate: 0 },
  ];

  export let frameTime: Readable<number>;
  $: frame = derivedFrame(keyframes, frameTime);

  let frameWidth = 1.5;

  $: transform = `rotate(${$frame.rotate}) scale(${$frame.scale})`;
</script>

<svg
  class="svg"
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
  .svg {
    max-width: 640px;
    display: block;
  }
</style>
