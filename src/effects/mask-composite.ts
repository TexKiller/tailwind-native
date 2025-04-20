import { css } from "css-native";

const maskComposite = (value: string) => css`
  mask-composite: ${value};
`;
export const mask_add = maskComposite("add");
export const mask_subtract = maskComposite("subtract");
export const mask_intersect = maskComposite("intersect");
export const mask_exclude = maskComposite("exclude");
