import { css } from "css-native";

export const indent = (indent: TemplateStringsArray) => css`
  text-indent: ${/^-?(0|[1-9]\d*)(\.\d*)?$/.test(indent[0])
    ? `calc(var(--spacing) * ${indent[0]})`
    : indent[0]};
`;
export const indent_px = indent`1px`;
export const _indent_px = indent`-1px`;
