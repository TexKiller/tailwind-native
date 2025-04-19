import { css } from "css-native";

export const bg_size = (value: string) => css`
  background-size: ${value};
`;
export const bg_auto = bg_size("auto");
export const bg_cover = bg_size("cover");
export const bg_contain = bg_size("contain");
