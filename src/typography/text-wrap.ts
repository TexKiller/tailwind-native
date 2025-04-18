import { css } from "css-native";

const textWrap = (wrap: string) => css`
  text-wrap: ${wrap};
`;
export const text_wrap = textWrap("normal");
export const text_nowrap = textWrap("nowrap");
export const text_balance = textWrap("balance");
export const text_pretty = textWrap("pretty");
