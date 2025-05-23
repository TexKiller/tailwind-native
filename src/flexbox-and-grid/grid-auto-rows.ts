import { css } from "css-native";

export const auto_rows = (value: TemplateStringsArray) => css`
  grid-auto-rows: ${value[0]};
`;
export const auto_rows_auto = auto_rows`auto`;
export const auto_rows_min = auto_rows`min-content`;
export const auto_rows_max = auto_rows`max-content`;
export const auto_rows_fr = auto_rows`minmax(0, 1fr)`;
