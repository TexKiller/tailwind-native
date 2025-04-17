import { css } from "css-native";

const alignItems = (value: string) => css`
  align-items: ${value};
`;
export const align_items_start = alignItems(`flex-start`);
export const align_items_end = alignItems(`flex-end`);
export const align_items_end_safe = alignItems(`safe flex-end`);
export const align_items_center = alignItems(`center`);
export const align_items_center_safe = alignItems(`safe center`);
export const align_items_baseline = alignItems(`baseline`);
export const align_items_last_baseline = alignItems(`last baseline`);
export const align_items_stretch = alignItems(`stretch`);
