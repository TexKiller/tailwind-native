import { css } from "css-native";

const backgroundAttachment = (value: string) => css`
  background-attachment: ${value};
`;
export const bg_fixed = backgroundAttachment("fixed");
export const bg_local = backgroundAttachment("local");
export const bg_scroll = backgroundAttachment("scroll");
