import { css } from "css-native";

const transformStyle = (value: string) => css`
  transform-style: ${value};
`;
export const transform_3d = transformStyle("preserve-3d");
export const transform_flat = transformStyle("flat");
