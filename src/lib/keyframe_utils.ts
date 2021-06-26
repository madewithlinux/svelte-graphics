import { interpolate } from "d3-interpolate";
import { scaleLinear } from "d3-scale";
import type { Readable } from "svelte/store";
import { derived } from "svelte/store";

export interface Keyframe {
  time: number;
}

export const makeFrameInterpolator = <K extends Keyframe>(keyframes: K[]) => {
  // TODO: assert that keyframes are in-order
  const times = keyframes.map((k) => k.time);
  return scaleLinear(times, keyframes);
};

export const derivedFrame = <K extends Keyframe>(
  keyframes: K[],
  frameTime: Readable<number>
): Readable<K> => {
  const frameInterpolator = makeFrameInterpolator(keyframes);
  return derived(frameTime, ($frameTime) => frameInterpolator($frameTime));
};
