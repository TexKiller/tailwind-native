import { css } from "css-native";

const parseGap = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?$/.test(value)
    ? `calc(var(--spacing) * ${value})`
    : value;
export const gap = (value: TemplateStringsArray) => css`
  gap: ${parseGap(value[0])};
`;
export const gap_x = (value: TemplateStringsArray) => css`
  column-gap: ${parseGap(value[0])};
`;
export const gap_y = (value: TemplateStringsArray) => css`
  row-gap: ${parseGap(value[0])};
`;
