import { css } from "css-native";

export const text_height = (size: string, line_height: string) => css`
  font-size: ${size};
  line-height: ${line_height};
`;
export const leading_none = css`
  line-height: 1;
`;
export const leading = (line_height: string) => css`
  line-height: ${/^-?(0|[1-9]\d*)?(.\d*)?$/.test(line_height)
    ? `calc(var(--spacing) * ${line_height})`
    : line_height};
`;
