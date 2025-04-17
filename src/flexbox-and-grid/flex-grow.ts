import { css } from "css-native";

export const grow = (value?: string) => css`
  flex-grow: ${value || 1};
`;
