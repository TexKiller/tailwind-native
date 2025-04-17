import { css } from "css-native";

const justifyContent = (value: string) => css`
  justify-content: ${value};
`;
export const justify_start = justifyContent(`flex-start`);
export const justify_end = justifyContent(`flex-end`);
export const justify_end_safe = justifyContent(`safe flex-end`);
export const justify_center = justifyContent(`center`);
export const justify_center_safe = justifyContent(`safe center`);
export const justify_between = justifyContent(`space-between`);
export const justify_around = justifyContent(`space-around`);
export const justify_evenly = justifyContent(`space-evenly`);
export const justify_stretch = justifyContent(`stretch`);
export const justify_baseline = justifyContent(`baseline`);
export const justify_normal = justifyContent(`normal`);
