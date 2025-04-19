import { css } from "css-native";

export const outline_width = (width: string) => css`
  outline-width: ${/^-?(0|[1-9]\d*)?(\.\d+)?$/.test(width)
    ? width + "px"
    : width};
`;
