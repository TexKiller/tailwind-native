import { css } from "css-native";

export const auto_cols = (value: string) => css`
  grid-auto-columns: ${value};
`;
export const auto_cols_auto = auto_cols(`auto`);
export const auto_cols_min = auto_cols(`min-content`);
export const auto_cols_max = auto_cols(`max-content`);
export const auto_cols_fr = auto_cols(`minmax(0, 1fr)`);
