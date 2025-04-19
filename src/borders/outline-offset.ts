import { css } from "css-native";

export const outline_offset = (offset: string) => css`
  outline-offset: ${/^-?(0|[1-9]\d*)?(\.\d+)?$/.test(offset)
    ? offset + "px"
    : offset};
`;
