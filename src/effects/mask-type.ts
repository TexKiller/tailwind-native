import { css } from "css-native";

const maskType = (value: string) => css`
  mask-type: ${value};
`;

export const mask_type_alpha = maskType("alpha");
export const mask_type_luminance = maskType("luminance");
