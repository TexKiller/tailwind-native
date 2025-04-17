import { css } from "css-native";

const alignSelf = (value: string) => css`
  align-self: ${value};
`;
export const self_auto = alignSelf(`auto`);
export const self_start = alignSelf(`flex-start`);
export const self_end = alignSelf(`flex-end`);
export const self_end_safe = alignSelf(`safe flex-end`);
export const self_center = alignSelf(`center`);
export const self_center_safe = alignSelf(`safe center`);
export const self_stretch = alignSelf(`stretch`);
export const self_baseline = alignSelf(`baseline`);
export const self_baseline_last = alignSelf(`last baseline`);
