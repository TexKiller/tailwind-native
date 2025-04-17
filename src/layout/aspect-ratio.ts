import { css } from "css-native";

export const aspect = (ratio: string) => css`
  aspect-ratio: ${ratio};
`;
export const aspect_square = aspect("1 / 1");
export const aspect_video = aspect("var(--aspect-ratio-video, 16 / 9)");
export const aspect_auto = aspect("auto");
