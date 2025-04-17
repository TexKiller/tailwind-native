import { css } from "css-native";

export const flex = (value?: string) =>
  (value &&
    css`
      flex: ${value.includes("/") ? `calc(${value} * 100%)` : value};
    `) ||
  css`
    display: flex;
  `;
export const flex_auto = flex(`1 1 auto`);
export const flex_initial = flex(`0 1 auto`);
export const flex_none = flex(`none`);
