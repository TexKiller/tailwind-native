import { css } from "css-native";

export const font_stretch = (stretch: TemplateStringsArray) => css`
  font-stretch: ${stretch[0]};
`;
export const font_stretch_ultra_condensed = font_stretch`ultra-condensed`;
export const font_stretch_extra_condensed = font_stretch`extra-condensed`;
export const font_stretch_condensed = font_stretch`condensed`;
export const font_stretch_semi_condensed = font_stretch`semi-condensed`;
export const font_stretch_normal = font_stretch`normal`;
export const font_stretch_semi_expanded = font_stretch`semi-expanded`;
export const font_stretch_expanded = font_stretch`expanded`;
export const font_stretch_extra_expanded = font_stretch`extra-expanded`;
export const font_stretch_ultra_expanded = font_stretch`ultra-expanded`;
