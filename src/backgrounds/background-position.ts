import { css } from "css-native";

export const bg_position = (value: string) => css`
  background-position: ${value};
`;
export const bg_top_left = bg_position("top left");
export const bg_top = bg_position("top");
export const bg_top_right = bg_position("top right");
export const bg_left = bg_position("left");
export const bg_center = bg_position("center");
export const bg_right = bg_position("right");
export const bg_bottom_left = bg_position("bottom left");
export const bg_bottom = bg_position("bottom");
export const bg_bottom_right = bg_position("bottom right");
