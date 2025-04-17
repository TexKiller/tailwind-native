import { css } from "css-native";

const break_after = (value: string) => css`
  break-after: ${value};
`;
export const break_after_auto = break_after("auto");
export const break_after_avoid = break_after("avoid");
export const break_after_all = break_after("all");
export const break_after_avoid_page = break_after("avoid-page");
export const break_after_page = break_after("page");
export const break_after_left = break_after("left");
export const break_after_right = break_after("right");
export const break_after_column = break_after("column");
