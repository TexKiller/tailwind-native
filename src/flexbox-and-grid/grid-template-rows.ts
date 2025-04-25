import { css } from "css-native";

export const grid_rows = (value: TemplateStringsArray) => css`
  grid-template-rows: ${/(0|[1-9]\d*)(\.\d*)?$/.test(value[0])
    ? `repeat(${value[0]}, minmax(0, 1fr))`
    : value[0]};
`;
export const grid_rows_none = grid_rows`none`;
export const grid_rows_subgrid = grid_rows`subgrid`;
