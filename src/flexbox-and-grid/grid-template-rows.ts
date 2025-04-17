import { css } from "css-native";

export const grid_rows = (value: string) => css`
  grid-template-rows: ${/(0|[1-9]\d*)(\.\d*)?$/.test(value)
    ? `repeat(${value}, minmax(0, 1fr))`
    : value};
`;
export const grid_rows_none = grid_rows(`none`);
export const grid_rows_subgrid = grid_rows(`subgrid`);
