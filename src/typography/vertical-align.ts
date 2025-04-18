import { css } from "css-native";

export const align = (align: string) => css`
  vertical-align: ${align};
`;
export const align_baseline = align("baseline");
export const align_top = align("top");
export const align_middle = align("middle");
export const align_bottom = align("bottom");
export const align_text_top = align("text-top");
export const align_text_bottom = align("text-bottom");
export const align_sub = align("sub");
export const align_super = align("super");
