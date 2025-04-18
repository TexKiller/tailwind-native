import { css } from "css-native";

const overflowWrap = (wrap: string) => css`
  overflow-wrap: ${wrap};
`;
export const wrap_break_word = overflowWrap("break-word");
export const wrap_anywhere = overflowWrap("anywhere");
export const wrap_normal = overflowWrap("normal");
