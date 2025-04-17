import { css } from "css-native";

const float = (value: string) => css`
  float: ${value};
`;
export const float_right = float("right");
export const float_left = float("left");
export const float_start = float("start");
export const float_end = float("end");
export const float_none = float("none");
