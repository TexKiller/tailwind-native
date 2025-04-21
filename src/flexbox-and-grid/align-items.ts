import { css } from "css-native";

const alignItems = (value: string) => css`
  align-items: ${value};
`;
export const items_start = alignItems(`flex-start`);
export const items_end = alignItems(`flex-end`);
export const items_end_safe = alignItems(`safe flex-end`);
export const items_center = alignItems(`center`);
export const items_center_safe = alignItems(`safe center`);
export const items_baseline = alignItems(`baseline`);
export const items_last_baseline = alignItems(`last baseline`);
export const items_stretch = alignItems(`stretch`);
