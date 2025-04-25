import { css } from "css-native";

export const opacity = (value: TemplateStringsArray) => css`
  opacity: ${/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value[0])
    ? value[0] + "%"
    : value[0]};
`;
