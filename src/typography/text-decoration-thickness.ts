import { css } from "css-native";

export const decoration_thickness = (thickness: TemplateStringsArray) => css`
  text-decoration-thickness: ${thickness[0]};
`;
export const decoration_from_font = decoration_thickness`from-font`;
export const decoration_auto = decoration_thickness`auto`;
