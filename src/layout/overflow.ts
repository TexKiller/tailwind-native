import { css } from "css-native";

const overflow = (value: string) => css`
  overflow: ${value};
`;
export const overflow_auto = overflow("auto");
export const overflow_hidden = overflow("hidden");
export const overflow_clip = overflow("clip");
export const overflow_visible = overflow("visible");
export const overflow_scroll = overflow("scroll");
const overflow_x = (value: string) => css`
  overflow-x: ${value};
`;
export const overflow_x_auto = overflow_x("auto");
export const overflow_x_hidden = overflow_x("hidden");
export const overflow_x_clip = overflow_x("clip");
export const overflow_x_visible = overflow_x("visible");
export const overflow_x_scroll = overflow_x("scroll");
const overflow_y = (value: string) => css`
  overflow-y: ${value};
`;
export const overflow_y_auto = overflow_y("auto");
export const overflow_y_hidden = overflow_y("hidden");
export const overflow_y_clip = overflow_y("clip");
export const overflow_y_visible = overflow_y("visible");
export const overflow_y_scroll = overflow_y("scroll");
