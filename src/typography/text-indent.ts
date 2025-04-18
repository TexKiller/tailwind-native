import { css } from "css-native";

export const indent = (indent: string) => css`
  text-indent: ${/^-?(0|[1-9]\d*)(\.\d*)?$/.test(indent)
    ? `calc(var(--spacing) * ${indent})`
    : indent};
`;
export const indent_px = indent("1px");
export const _indent_px = indent("-1px");
