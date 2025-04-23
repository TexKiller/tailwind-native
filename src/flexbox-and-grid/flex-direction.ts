import { css } from "css-native";

const flexDirection = (value: string) => css`
  flex-direction: ${value};
`;
export const flex_row = flexDirection(`row`);
export const flex_row_reverse = flexDirection(`row-reverse`);
export const flex_col = flexDirection(`column`);
export const flex_col_reverse = flexDirection(`column-reverse`);
