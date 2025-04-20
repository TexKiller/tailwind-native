import { css } from "css-native";

const backfaceVisibility = (value: string) => css`
  backface-visibility: ${value};
`;
export const backface_hidden = backfaceVisibility("hidden");
export const backface_visible = backfaceVisibility("visible");
