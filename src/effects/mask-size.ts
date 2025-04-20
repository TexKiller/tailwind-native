import { css } from "css-native";

export const mask_size = (value: string) => css`
  mask-size: ${value};
`;
export const mask_auto = mask_size("auto");
export const mask_cover = mask_size("cover");
export const mask_contain = mask_size("contain");
