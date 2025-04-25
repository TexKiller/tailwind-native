import { css } from "css-native";

export const outline_offset = (offset: TemplateStringsArray) => css`
  outline-offset: ${/^-?(0|[1-9]\d*)?(\.\d+)?$/.test(offset[0])
    ? offset[0] + "px"
    : offset[0]};
`;
