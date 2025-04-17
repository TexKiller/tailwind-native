import { css } from "css-native";

export const row_span = (value: string) => css`
  grid-row: span ${value} / span ${value};
`;
export const row_span_full = css`
  grid-row: 1 / -1;
`;
export const row_start = (value: string) => css`
  grid-row-start: ${value};
`;
export const row_start_auto = row_start(`auto`);
export const row_end = (value: string) => css`
  grid-row-end: ${value};
`;
export const row_end_auto = row_end(`auto`);
export const row = (value: string) => css`
  grid-row: ${value};
`;
export const row_auto = row(`auto`);
