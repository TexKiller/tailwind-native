import { css } from "css-native";

const maskRepeat = (value: string) => css`
  mask-repeat: ${value};
`;
export const mask_repeat = maskRepeat("repeat");
export const mask_no_repeat = maskRepeat("no-repeat");
export const mask_repeat_x = maskRepeat("repeat-x");
export const mask_repeat_y = maskRepeat("repeat-y");
export const mask_repeat_space = maskRepeat("space");
export const mask_repeat_round = maskRepeat("round");
