import { css } from "css-native";

const position = (value: string) => css`
  position: ${value};
`;
export const position_static = position("static");
export const position_fixed = position("fixed");
export const position_absolute = position("absolute");
export const position_relative = position("relative");
export const position_sticky = position("sticky");
