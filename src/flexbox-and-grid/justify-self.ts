import { css } from "css-native";

const justifySelf = (value: string) => css`
  justify-self: ${value};
`;
export const justify_self_start = justifySelf(`start`);
export const justify_self_end = justifySelf(`end`);
export const justify_self_end_safe = justifySelf(`safe end`);
export const justify_self_center = justifySelf(`center`);
export const justify_self_center_safe = justifySelf(`safe center`);
export const justify_self_stretch = justifySelf(`stretch`);
export const justify_self_normal = justifySelf(`normal`);
