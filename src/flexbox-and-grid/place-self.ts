import { css } from "css-native";

const placeSelf = (value: string) => css`
  place-self: ${value};
`;
export const place_self_auto = placeSelf(`auto`);
export const place_self_start = placeSelf(`start`);
export const place_self_end = placeSelf(`end`);
export const place_self_end_safe = placeSelf(`safe end`);
export const place_self_center = placeSelf(`center`);
export const place_self_center_safe = placeSelf(`safe center`);
export const place_self_stretch = placeSelf(`stretch`);
