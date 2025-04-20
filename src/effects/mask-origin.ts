import { css } from "css-native";

const maskOrigin = (value: string) => css`
  mask-origin: ${value};
`;
export const mask_origin_border = maskOrigin("border-box");
export const mask_origin_padding = maskOrigin("padding-box");
export const mask_origin_content = maskOrigin("content-box");
export const mask_origin_fill = maskOrigin("fill-box");
export const mask_origin_stroke = maskOrigin("stroke-box");
export const mask_origin_view = maskOrigin("view-box");
