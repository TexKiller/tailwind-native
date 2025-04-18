import { css } from "css-native";

export const list = (type: string) => css`
  list-style-type: ${type};
`;
export const list_disc = list("disc");
export const list_decimal = list("decimal");
export const list_none = list("none");
