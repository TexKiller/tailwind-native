import { css } from "css-native";

export const shrink = (value?: string) => css`
  flex-shrink: ${value || 1};
`;
