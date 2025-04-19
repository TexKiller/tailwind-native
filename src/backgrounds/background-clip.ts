import { css } from "css-native";

const backgroundClip = (value: string) => css`
  background-clip: ${value};
`;
export const bg_clip_border = backgroundClip("border-box");
export const bg_clip_padding = backgroundClip("padding-box");
export const bg_clip_content = backgroundClip("content-box");
export const bg_clip_text = backgroundClip("text");
