import { css } from "css-native";

export const opacity = (value: string) => css`
  opacity: ${/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value) ? value + "%" : value};
`;
