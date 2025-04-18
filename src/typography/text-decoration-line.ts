import { css } from "css-native";

const textDecorationLine = (line: string) => css`
  text-decoration-line: ${line};
`;
export const underline = textDecorationLine("underline");
export const overline = textDecorationLine("overline");
export const line_through = textDecorationLine("line-through");
export const no_underline = textDecorationLine("none");
