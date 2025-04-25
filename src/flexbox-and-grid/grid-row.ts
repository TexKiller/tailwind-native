import { css } from "css-native";

export const row_span = (value: TemplateStringsArray) => css`
  grid-row: span ${value[0]} / span ${value[0]};
`;
export const row_span_full = css`
  grid-row: 1 / -1;
`;
export const row_start = (value: TemplateStringsArray) => css`
  grid-row-start: ${value[0]};
`;
export const row_start_auto = row_start`auto`;
export const row_end = (value: TemplateStringsArray) => css`
  grid-row-end: ${value[0]};
`;
export const row_end_auto = row_end`auto`;
export const row = (value: TemplateStringsArray) => css`
  grid-row: ${value[0]};
`;
export const row_auto = row`auto`;
