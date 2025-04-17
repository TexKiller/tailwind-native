import { css } from "css-native";

export const col_span = (value: string) => css`
  grid-column: span ${value} / span ${value};
`;
export const col_span_full = css`
  grid-column: 1 / -1;
`;
export const col_start = (value: string) => css`
  grid-column-start: ${value};
`;
export const col_start_auto = col_start(`auto`);
export const col_end = (value: string) => css`
  grid-column-end: ${value};
`;
export const col_end_auto = col_end(`auto`);
export const col = (value: string) => css`
  grid-column: ${value};
`;
export const col_auto = col(`auto`);
