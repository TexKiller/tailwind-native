import { css } from "css-native";

export const perspective_origin = (value: TemplateStringsArray) => css`
  perspective-origin: ${value[0]};
`;
export const perspective_origin_center = perspective_origin`center`;
export const perspective_origin_top = perspective_origin`top`;
export const perspective_origin_top_right = perspective_origin`top right`;
export const perspective_origin_right = perspective_origin`right`;
export const perspective_origin_bottom_right = perspective_origin`bottom right`;
export const perspective_origin_bottom = perspective_origin`bottom`;
export const perspective_origin_bottom_left = perspective_origin`bottom left`;
export const perspective_origin_left = perspective_origin`left`;
export const perspective_origin_top_left = perspective_origin`top left`;
