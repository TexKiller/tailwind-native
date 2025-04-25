import { css } from "css-native";

export const underline_offset = (offset: TemplateStringsArray) => css`
  text-underline-offset: ${/^-?(0|[1-9]\d*)(\.\d*)?$/.test(offset[0])
    ? `${offset[0]}px`
    : offset[0]};
`;
export const underline_offset_auto = underline_offset`auto`;
