import { css } from "css-native";

const placeItems = (value: string) => css`
  place-items: ${value};
`;
export const place_items_start = placeItems(`start`);
export const place_items_end = placeItems(`end`);
export const place_items_end_safe = placeItems(`safe end`);
export const place_items_center = placeItems(`center`);
export const place_items_center_safe = placeItems(`safe center`);
export const place_items_baseline = placeItems(`baseline`);
export const place_items_stretch = placeItems(`stretch`);
