import { css } from "css-native";

export const underline_offset = (offset: string) => css`
  text-underline-offset: ${/^-?(0|[1-9]\d*)(\.\d*)?$/.test(offset)
    ? `${offset}px`
    : offset};
`;
export const underline_offset_auto = underline_offset("auto");
