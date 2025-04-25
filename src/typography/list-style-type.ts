import { css } from "css-native";

export const list = (type: TemplateStringsArray) => css`
  list-style-type: ${type[0]};
`;
export const list_disc = list`disc`;
export const list_decimal = list`decimal`;
export const list_none = list`none`;
