import { css } from "css-native";

const borderCollapse = (value: string) => css`
  border-collapse: ${value};
`;
export const border_collapse = borderCollapse("collapse");
export const border_separate = borderCollapse("separate");
