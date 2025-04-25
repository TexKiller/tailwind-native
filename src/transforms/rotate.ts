import { css } from "css-native";
import { transform } from "./transform";

const parseRotate = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?/.test(value) ? value + "deg" : value;
export const rotate = (value: TemplateStringsArray) => css`
  rotate: ${parseRotate(value[0])};
`;
export const rotate_x = (value: TemplateStringsArray) => css`
  --tw-rotate-x: rotateX(${parseRotate(value[0])});
  transform: ${transform.variables};
`;
export const rotate_y = (value: TemplateStringsArray) => css`
  --tw-rotate-y: rotateY(${parseRotate(value[0])});
  transform: ${transform.variables};
`;
export const rotate_z = (value: TemplateStringsArray) => css`
  --tw-rotate-z: rotateZ(${parseRotate(value[0])});
  transform: ${transform.variables};
`;
