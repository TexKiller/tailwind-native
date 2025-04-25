import { css } from "css-native";

export const content = (content: TemplateStringsArray) => css`
  content: ${content[0]};
`;
