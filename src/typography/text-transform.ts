import { css } from "css-native";

const textTransform = (transform: string) => css`
  text-transform: ${transform};
`;
export const uppercase = textTransform("uppercase");
export const lowercase = textTransform("lowercase");
export const capitalize = textTransform("capitalize");
export const normal_case = textTransform("none");
