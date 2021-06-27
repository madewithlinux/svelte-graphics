<script lang="ts">
  import { scaleLinear } from "d3-scale";

  import type { Readable } from "svelte/store";
  import { derivedFrame } from "@/lib/keyframe_utils";

  export let frameTime: Readable<number>;
  export let bgColor = "#da076f";
  export let fgColor = "white";
  export let innerRectColor = fgColor;

  $: transformFrame = derivedFrame(
    [
      { time: 0, scale: 1, rotate: 0 },
      { time: 100, scale: Math.sqrt(2), rotate: 45 },
    ],
    frameTime
  );

  let viewBoxWidth = 3;
  $: viewBox = `${-viewBoxWidth / 2},${-viewBoxWidth / 2},${viewBoxWidth},${viewBoxWidth}`;
  $: transform = `rotate(${$transformFrame.rotate}) scale(${$transformFrame.scale})`;

  const trianglePointKeyFrames = [{ values: [1, 1, 1, 1], time: 0 }];
  $: {
    const motionStartFrame = 25;
    const motionEndFrame = 75;

    trianglePointKeyFrames.push({ values: [1, 1, 1, 1], time: motionStartFrame });
    let values = [1, 1, 1, 1];
    for (let i = 0; i < 4; i++) {
      values[i] = 0;
      // values[i] = -0.0001;
      const time = scaleLinear([0, 4], [motionStartFrame, motionEndFrame])(i + 1);
      trianglePointKeyFrames.push({ values: [...values], time });
    }
    trianglePointKeyFrames.push({ values: [0, 0, 0, 0], time: motionEndFrame });
    trianglePointKeyFrames.push({ values: [0, 0, 0, 0], time: 100 });
  }

  $: trianglePointFrame = derivedFrame(trianglePointKeyFrames, frameTime);
  $: triangleValues = [0, 90, 180, 270].map((deg, i) => ({
    deg,
    h: $trianglePointFrame.values[i],
  }));
</script>

<svg class="svg" {viewBox} stroke-width={viewBoxWidth / 640}>
  <rect
    x={-viewBoxWidth}
    y={-viewBoxWidth}
    width={2 * viewBoxWidth}
    height={2 * viewBoxWidth}
    stroke={bgColor}
    fill={bgColor}
  />
  <clipPath id="clipRectangle">
    <path
      clip-rule="nonzero"
      d="
      M-0.5 -0.5 h1 v1 h-1 z
      M-0.5 0 
      L 0 0.5 
      L 0.5 0 
      L 0 -0.5
      z
    "
    />
  </clipPath>
  <clipPath id="clipRectangle2">
    <path
      clip-rule="nonzero"
      d="
      M-0.5 0 
      L 0 0.5 
      L 0.5 0 
      L 0 -0.5
      z
    "
    />
  </clipPath>
  <clipPath id="clipRectangleOuter">
    <path
      clip-rule="nonzero"
      d="
      M-1 -1 h2 v2 h-2 z
      M-0.5 0 
      L 0 0.5 
      L 0.5 0 
      L 0 -0.5
      z
    "
    />
  </clipPath>

  <g {transform} stroke={fgColor} fill={fgColor}>
    <rect
      id="innerRect"
      x="-0.5"
      y="-0.5"
      width="1"
      height="1"
      stroke={innerRectColor}
      fill={innerRectColor}
    />
    {#each triangleValues as { deg, h }, i}
      <polygon id="triangle{i}" points="0,1 {h},{h} 1,0" transform="rotate({deg})" />
      <use clip-path="url(#clipRectangle)" href="#triangle{i}" stroke={bgColor} fill={bgColor} />
      <use
        clip-path="url(#clipRectangle2)"
        href="#triangle{i}"
        stroke={innerRectColor}
        fill={innerRectColor}
      />
    {/each}
  </g>
</svg>

<style>
  .svg {
    max-width: 640px;
    display: block;
    margin: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 10px solid grey;
  }
</style>
