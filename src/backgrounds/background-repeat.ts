import { css } from "css-native";

const backgroundRepeat = (value: string) => css`
  background-repeat: ${value};
`;
export const bg_repeat = backgroundRepeat("repeat");
export const bg_repeat_x = backgroundRepeat("repeat-x");
export const bg_repeat_y = backgroundRepeat("repeat-y");
export const bg_repeat_space = backgroundRepeat("repeat space");
export const bg_repeat_round = backgroundRepeat("repeat round");
export const bg_no_repeat = backgroundRepeat("no-repeat");
