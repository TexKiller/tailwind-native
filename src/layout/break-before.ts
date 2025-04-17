import { css } from "css-native";

const break_before = (value: string) => css`
  break-before: ${value};
`;
export const break_before_auto = break_before("auto");
export const break_before_avoid = break_before("avoid");
export const break_before_all = break_before("all");
export const break_before_avoid_page = break_before("avoid-page");
export const break_before_page = break_before("page");
export const break_before_left = break_before("left");
export const break_before_right = break_before("right");
export const break_before_column = break_before("column");
