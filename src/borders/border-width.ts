import { css } from "css-native";

const parseBorderWidth = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?$/.test(value) ? value + "px" : value;
export const border_width = (value: string) => css`
  border-width: ${parseBorderWidth(value)};
`;
export const border_x = (value?: string) => css`
  border-inline-width: ${parseBorderWidth(value || "1px")};
`;
export const border_y = (value?: string) => css`
  border-block-width: ${parseBorderWidth(value || "1px")};
`;
export const border_s = (value?: string) => css`
  border-inline-start-width: ${parseBorderWidth(value || "1px")};
`;
export const border_e = (value?: string) => css`
  border-inline-end-width: ${parseBorderWidth(value || "1px")};
`;
export const border_t = (value?: string) => css`
  border-top-width: ${parseBorderWidth(value || "1px")};
`;
export const border_r = (value?: string) => css`
  border-right-width: ${parseBorderWidth(value || "1px")};
`;
export const border_b = (value?: string) => css`
  border-bottom-width: ${parseBorderWidth(value || "1px")};
`;
export const border_l = (value?: string) => css`
  border-left-width: ${parseBorderWidth(value || "1px")};
`;

// divide utilities not included because of complicated selectors
