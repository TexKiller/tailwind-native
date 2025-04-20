import { css } from "css-native";

const maskMode = (value: string) => css`
  mask-mode: ${value};
`;
export const mask_alpha = maskMode("alpha");
export const mask_luminance = maskMode("luminance");
export const mask_match = maskMode("match-source");
