import { css } from "css-native";

const clear = (value: string) => css`
  clear: ${value};
`;
export const clear_left = clear("left");
export const clear_right = clear("right");
export const clear_both = clear("both");
export const clear_start = clear("start");
export const clear_end = clear("end");
export const clear_none = clear("none");
