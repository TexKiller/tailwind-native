import { css } from "css-native";

export const outline_width = (width: TemplateStringsArray) => css`
  outline-width: ${/^-?(0|[1-9]\d*)?(\.\d+)?$/.test(width[0])
    ? width[0] + "px"
    : width[0]};
`;
