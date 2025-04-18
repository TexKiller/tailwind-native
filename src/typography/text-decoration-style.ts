import { css } from "css-native";

const textDecorationStyle = (style: string) => css`
  text-decoration-style: ${style};
`;
export const decoration_solid = textDecorationStyle("solid");
export const decoration_double = textDecorationStyle("double");
export const decoration_dotted = textDecorationStyle("dotted");
export const decoration_dashed = textDecorationStyle("dashed");
export const decoration_wavy = textDecorationStyle("wavy");
