import { css } from "css-native";

export const object = (value: TemplateStringsArray) => css`
  object-position: ${value[0]};
`;
export const object_top_left = object`top left`;
export const object_top = object`top`;
export const object_top_right = object`top right`;
export const object_left = object`left`;
export const object_center = object`center`;
export const object_right = object`right`;
export const object_bottom_left = object`bottom left`;
export const object_bottom = object`bottom`;
export const object_bottom_right = object`bottom right`;
