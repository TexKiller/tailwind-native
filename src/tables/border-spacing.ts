import { css } from "css-native";

export const border_spacing = (value: string) => css`
  border-spacing: ${value};
`;
export const border_spacing_x = (value: string) =>
  border_spacing(
    (/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value)
      ? `calc(var(--spacing) * ${value})`
      : value) + " var(--tw-border-spacing-y)",
  );
export const border_spacing_y = (value: string) =>
  border_spacing(
    "var(--tw-border-spacing-x)" +
      (/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value)
        ? `calc(var(--spacing) * ${value})`
        : value),
  );
