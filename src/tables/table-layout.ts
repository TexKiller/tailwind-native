import { css } from "css-native";

const tableLayout = (value: string) => css`
  table-layout: ${value};
`;
export const table_auto = tableLayout("auto");
export const table_fixed = tableLayout("fixed");
