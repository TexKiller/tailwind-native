import { css } from "css-native";

export const z = (value: TemplateStringsArray) => css`
  z-index: ${value[0]};
`;
export const z_auto = z`auto`;
