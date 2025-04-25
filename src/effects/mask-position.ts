import { css } from "css-native";

export const mask_position = (value: TemplateStringsArray) => css`
  mask-position: ${value[0]};
`;
export const mask_top_left = mask_position`top left`;
export const mask_top = mask_position`top`;
export const mask_top_right = mask_position`top right`;
export const mask_left = mask_position`left`;
export const mask_center = mask_position`center`;
export const mask_right = mask_position`right`;
export const mask_bottom_left = mask_position`bottom left`;
export const mask_bottom = mask_position`bottom`;
export const mask_bottom_right = mask_position`bottom right`;
