import { css } from "css-native";

export const flex = (value?: TemplateStringsArray) =>
  (value?.[0] &&
    css`
      flex: ${value[0].includes("/") ? `calc(${value[0]} * 100%)` : value[0]};
    `) ||
  css`
    display: flex;
  `;
export const flex_auto = flex`1 1 auto`;
export const flex_initial = flex`0 1 auto`;
export const flex_none = flex`none`;
