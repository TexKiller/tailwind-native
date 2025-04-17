import { css } from "css-native";

const overscroll_behavior = (value: string) => css`
  overscroll-behavior: ${value};
`;
export const overscroll_behavior_auto = overscroll_behavior("auto");
export const overscroll_behavior_contain = overscroll_behavior("contain");
export const overscroll_behavior_none = overscroll_behavior("none");
const overscroll_behavior_x = (value: string) => css`
  overscroll-behavior-x: ${value};
`;
export const overscroll_behavior_x_auto = overscroll_behavior_x("auto");
export const overscroll_behavior_x_contain = overscroll_behavior_x("contain");
export const overscroll_behavior_x_none = overscroll_behavior_x("none");
const overscroll_behavior_y = (value: string) => css`
  overscroll-behavior-y: ${value};
`;
export const overscroll_behavior_y_auto = overscroll_behavior_y("auto");
export const overscroll_behavior_y_contain = overscroll_behavior_y("contain");
export const overscroll_behavior_y_none = overscroll_behavior_y("none");
