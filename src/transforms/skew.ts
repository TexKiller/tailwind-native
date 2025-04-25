import { css } from "css-native";
import { transform } from "./transform";

const parseSkew = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?/.test(value) ? value + "deg" : value;
export const skew = (value: TemplateStringsArray) => css`
  --tw-skew-x: skewX(${parseSkew(value[0])});
  --tw-skew-y: skewY(${parseSkew(value[0])});
  transform: ${transform.variables};
`;
export const skew_x = (value: TemplateStringsArray) => css`
  --tw-skew-x: skewX(${parseSkew(value[0])});
  transform: ${transform.variables};
`;
export const skew_y = (value: TemplateStringsArray) => css`
  --tw-skew-y: skewY(${parseSkew(value[0])});
  transform: ${transform.variables};
`;
