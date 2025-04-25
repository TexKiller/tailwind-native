import { css } from "css-native";

export const border_spacing = (value: TemplateStringsArray) => css`
  border-spacing: ${value[0]};
`;
export const border_spacing_x = (value: TemplateStringsArray) =>
  border_spacing([
    (/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value[0])
      ? `calc(var(--spacing) * ${value[0]})`
      : value[0]) + " var(--tw-border-spacing-y)",
  ] as any);
export const border_spacing_y = (value: TemplateStringsArray) =>
  border_spacing([
    "var(--tw-border-spacing-x)",
    /^-?(0|[1-9]\d*)(\.\d*)?$/.test(value[0])
      ? `calc(var(--spacing) * ${value})`
      : value,
  ] as any);
