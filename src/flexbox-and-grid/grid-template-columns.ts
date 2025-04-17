import { css } from "css-native";

export const grid_cols = (value: string) => css`
  grid-template-columns: ${/(0|[1-9]\d*)(\.\d*)?$/.test(value)
    ? `repeat(${value}, minmax(0, 1fr))`
    : value};
`;
export const grid_cols_none = grid_cols(`none`);
export const grid_cols_subgrid = grid_cols(`subgrid`);
