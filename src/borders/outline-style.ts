import { css } from "css-native";

const outlineStyle = (style: string) => css`
  outline-style: ${style};
`;
export const outline_solid = outlineStyle("solid");
export const outline_dashed = outlineStyle("dashed");
export const outline_dotted = outlineStyle("dotted");
export const outline_double = outlineStyle("double");
export const outline_none = outlineStyle("none");
export const outline_hidden = css`
  outline: 2px solid transparent;
  outline-offset: 2px;
`;
