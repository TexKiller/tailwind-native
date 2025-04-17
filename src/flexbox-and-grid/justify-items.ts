import { css } from "css-native";

const justifyItems = (value: string) => css`
  justify-items: ${value};
`;
export const justify_items_start = justifyItems(`start`);
export const justify_items_end = justifyItems(`end`);
export const justify_items_end_safe = justifyItems(`safe end`);
export const justify_items_center = justifyItems(`center`);
export const justify_items_center_safe = justifyItems(`safe center`);
export const justify_items_stretch = justifyItems(`stretch`);
export const justify_items_normal = justifyItems(`normal`);
