import { css } from "css-native";

const object_fit = (value: string) => css`
  object-fit: ${value};
`;
export const object_fit_contain = object_fit("contain");
export const object_fit_cover = object_fit("cover");
export const object_fit_fill = object_fit("fill");
export const object_fit_none = object_fit("none");
export const object_fit_scale_down = object_fit("scale-down");
