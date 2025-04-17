import { css } from "css-native";

const break_inside = (value: string) => css`
  break-inside: ${value};
`;
export const break_inside_auto = break_inside("auto");
export const break_inside_avoid = break_inside("avoid");
export const break_inside_avoid_page = break_inside("avoid-page");
export const break_inside_avoid_column = break_inside("avoid-column");
