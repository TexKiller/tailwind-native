import { css } from "css-native";

export const grid_cols = (value: TemplateStringsArray) => css`
  grid-template-columns: ${/(0|[1-9]\d*)(\.\d*)?$/.test(value[0])
    ? `repeat(${value[0]}, minmax(0, 1fr))`
    : value[0]};
`;
export const grid_cols_none = grid_cols`none`;
export const grid_cols_subgrid = grid_cols`subgrid`;
