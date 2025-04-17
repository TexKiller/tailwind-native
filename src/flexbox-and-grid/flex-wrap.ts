import { css } from "css-native";

const flexWrap = (value: string) => css`
  flex-wrap: ${value};
`;
export const flex_nowrap = flexWrap(`nowrap`);
export const flex_wrap = flexWrap(`wrap`);
export const flex_wrap_reverse = flexWrap(`wrap-reverse`);
