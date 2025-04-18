import { css } from "css-native";

export const decoration_thickness = (thickness: string) => css`
  text-decoration-thickness: ${thickness};
`;
export const decoration_from_font = decoration_thickness("from-font");
export const decoration_auto = decoration_thickness("auto");
