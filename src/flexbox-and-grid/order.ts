import { css } from "css-native";

export const order = (value: string) => css`
  order: ${value};
`;
export const order_first = order(`-999999`);
export const order_last = order(`999999`);
export const order_none = order(`0`);
