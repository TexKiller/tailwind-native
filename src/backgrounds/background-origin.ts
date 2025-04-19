import { css } from "css-native";

const backgroundOrigin = (value: string) => css`
  background-origin: ${value};
`;
export const bg_origin_border = backgroundOrigin("border-box");
export const bg_origin_padding = backgroundOrigin("padding-box");
export const bg_origin_content = backgroundOrigin("content-box");
