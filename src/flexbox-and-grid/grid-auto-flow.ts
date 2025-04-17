import { css } from "css-native";

const gridAutoFlow = (value: string) => css`
  grid-auto-flow: ${value};
`;
export const grid_flow_row = gridAutoFlow(`row`);
export const grid_flow_column = gridAutoFlow(`column`);
export const grid_flow_dense = gridAutoFlow(`dense`);
export const grid_flow_row_dense = gridAutoFlow(`row dense`);
export const grid_flow_column_dense = gridAutoFlow(`column dense`);
