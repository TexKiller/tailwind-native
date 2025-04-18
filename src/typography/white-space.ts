import { css } from "css-native";

const whiteSpace = (space: string) => css`
  white-space: ${space};
`;
export const whitespace_normal = whiteSpace("normal");
export const whitespace_nowrap = whiteSpace("nowrap");
export const whitespace_pre = whiteSpace("pre");
export const whitespace_pre_line = whiteSpace("pre-line");
export const whitespace_pre_wrap = whiteSpace("pre-wrap");
export const whitespace_break_spaces = whiteSpace("break-spaces");
