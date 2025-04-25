import { css } from "css-native";

export const col_span = (value: TemplateStringsArray) => css`
  grid-column: span ${value[0]} / span ${value[0]};
`;
export const col_span_full = css`
  grid-column: 1 / -1;
`;
export const col_start = (value: TemplateStringsArray) => css`
  grid-column-start: ${value[0]};
`;
export const col_start_auto = col_start`auto`;
export const col_end = (value: TemplateStringsArray) => css`
  grid-column-end: ${value[0]};
`;
export const col_end_auto = col_end`auto`;
export const col = (value: TemplateStringsArray) => css`
  grid-column: ${value[0]};
`;
export const col_auto = col`auto`;
