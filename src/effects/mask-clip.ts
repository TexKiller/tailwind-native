import { css } from "css-native";

const maskClip = (value: string) => css`
  mask-clip: ${value};
`;
export const mask_clip_border = maskClip("border-box");
export const mask_clip_padding = maskClip("padding-box");
export const mask_clip_content = maskClip("content-box");
export const mask_clip_fill = maskClip("fill-box");
export const mask_clip_stroke = maskClip("stroke-box");
export const mask_clip_view = maskClip("view-box");
export const mask_no_clip = maskClip("no-clip");
