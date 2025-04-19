import { css } from "css-native";

const borderStyle = (style: string) => css`
  border-style: ${style};
`;
export const border_solid = borderStyle("solid");
export const border_dashed = borderStyle("dashed");
export const border_dotted = borderStyle("dotted");
export const border_double = borderStyle("double");
export const border_hidden = borderStyle("hidden");
export const border_none = borderStyle("none");
