import { css } from "css-native";

export const z = (value: string) => css`
  z-index: ${value};
`;
export const z_auto = z(`auto`);
