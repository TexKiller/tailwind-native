import { css } from "css-native";

export const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const text_ellipsis = css`
  text-overflow: ellipsis;
`;
export const text_clip = css`
  text-overflow: clip;
`;
