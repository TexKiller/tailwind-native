import { css } from "css-native";

export const transform = (value: string) => css`
  transform: ${value};
`;
transform.variables =
  "var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y)";
export const transform_none = transform("none");
export const transform_gpu = transform("translateZ(0) " + transform.variables);
export const transform_cpu = transform(transform.variables);
