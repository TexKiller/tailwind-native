import { css } from "css-native";
import { transform } from "./transform";

const parseRotate = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?/.test(value) ? value + "deg" : value;
export const rotate = (value: string) => css`
  rotate: ${parseRotate(value)};
`;
export const rotate_x = (value: string) => css`
  --tw-rotate-x: rotateX(${parseRotate(value)});
  transform: ${transform.variables};
`;
export const rotate_y = (value: string) => css`
  --tw-rotate-y: rotateY(${parseRotate(value)});
  transform: ${transform.variables};
`;
export const rotate_z = (value: string) => css`
  --tw-rotate-z: rotateZ(${parseRotate(value)});
  transform: ${transform.variables};
`;
