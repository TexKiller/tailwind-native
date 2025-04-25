import { css } from "css-native";

export const shrink = (value?: TemplateStringsArray) => css`
  flex-shrink: ${value?.[0] || 1};
`;
