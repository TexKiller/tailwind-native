import { css } from "css-native";

export const order = (value: TemplateStringsArray) => css`
  order: ${value[0]};
`;
export const order_first = order`-999999`;
export const order_last = order`999999`;
export const order_none = order`0`;
