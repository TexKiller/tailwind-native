import { css } from "css-native";

const position = (value: string) => css`
  position: ${value};
`;
export const static_ = position("static");
export const fixed = position("fixed");
export const absolute = position("absolute");
export const relative = position("relative");
export const sticky = position("sticky");
