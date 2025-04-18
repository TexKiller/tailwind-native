import { css } from "css-native";

const hyphens = (hyphens: string) => css`
  hyphens: ${hyphens};
`;
export const hyphens_none = hyphens("none");
export const hyphens_manual = hyphens("manual");
export const hyphens_auto = hyphens("auto");
