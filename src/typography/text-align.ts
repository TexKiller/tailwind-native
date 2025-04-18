import { css } from "css-native";

const textAlign = (align: string) => css`
  text-align: ${align};
`;
export const text_left = textAlign("left");
export const text_center = textAlign("center");
export const text_right = textAlign("right");
export const text_justify = textAlign("justify");
export const text_start = textAlign("start");
export const text_end = textAlign("end");
