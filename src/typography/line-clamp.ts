import { css } from "css-native";

export const line_clamp = (lines: TemplateStringsArray) => css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lines[0]};
`;
export const line_clamp_none = css`
  overflow: visible;
  display: block;
  -webkit-box-orient: horizontal;
  -webkit-line-clamp: unset;
`;
