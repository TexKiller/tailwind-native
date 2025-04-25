import { css } from "css-native";

export const origin = (value: TemplateStringsArray) => css`
  transform-origin: ${value[0]};
`;
export const origin_center = origin`center`;
export const origin_top = origin`top`;
export const origin_top_right = origin`top right`;
export const origin_right = origin`right`;
export const origin_bottom_right = origin`bottom right`;
export const origin_bottom = origin`bottom`;
export const origin_bottom_left = origin`bottom left`;
export const origin_left = origin`left`;
export const origin_top_left = origin`top left`;
