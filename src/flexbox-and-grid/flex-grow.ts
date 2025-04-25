import { css } from "css-native";

export const grow = (value?: TemplateStringsArray) => css`
  flex-grow: ${value?.[0] || 1};
`;
