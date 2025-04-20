import { css } from "css-native";
import { transform } from "./transform";

const parseSkew = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?/.test(value) ? value + "deg" : value;
export const skew = (value: string) => css`
  --tw-skew-x: skewX(${parseSkew(value)});
  --tw-skew-y: skewY(${parseSkew(value)});
  transform: ${transform.variables};
`;
export const skew_x = (value: string) => css`
  --tw-skew-x: skewX(${parseSkew(value)});
  transform: ${transform.variables};
`;
export const skew_y = (value: string) => css`
  --tw-skew-y: skewY(${parseSkew(value)});
  transform: ${transform.variables};
`;
