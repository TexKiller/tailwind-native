import { css } from "css-native";

const parseGap = (value: string) =>
  /(0|[1-9]\d*)(\.\d*)?$/.test(value)
    ? `calc(var(--spacing) * ${value})`
    : value;
export const gap = (value: string) => css`
  gap: ${parseGap(value)};
`;
export const gap_x = (value: string) => css`
  column-gap: ${parseGap(value)};
`;
export const gap_y = (value: string) => css`
  row-gap: ${parseGap(value)};
`;
