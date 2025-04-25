import { css } from "css-native";

export const font_weight = (weight: TemplateStringsArray) => css`
  font-weight: ${weight[0]};
`;
export const font_thin = font_weight`100`;
export const font_extralight = font_weight`200`;
export const font_light = font_weight`300`;
export const font_normal = font_weight`400`;
export const font_medium = font_weight`500`;
export const font_semibold = font_weight`600`;
export const font_bold = font_weight`700`;
export const font_extrabold = font_weight`800`;
export const font_black = font_weight`900`;
