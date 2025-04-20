import { css } from "css-native";

const captionSide = (value: string) => css`
  caption-side: ${value};
`;
export const caption_top = captionSide("top");
export const caption_bottom = captionSide("bottom");
