import { css } from "css-native";

const parseBorderWidth = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?$/.test(value) ? value + "px" : value;
export const border_width = (value: TemplateStringsArray) => css`
  border-width: ${parseBorderWidth(value[0])};
`;
export const border_x = (value?: TemplateStringsArray) => css`
  border-inline-width: ${parseBorderWidth(value?.[0] || "1px")};
`;
export const border_y = (value?: TemplateStringsArray) => css`
  border-block-width: ${parseBorderWidth(value?.[0] || "1px")};
`;
export const border_s = (value?: TemplateStringsArray) => css`
  border-inline-start-width: ${parseBorderWidth(value?.[0] || "1px")};
`;
export const border_e = (value?: TemplateStringsArray) => css`
  border-inline-end-width: ${parseBorderWidth(value?.[0] || "1px")};
`;
export const border_t = (value?: TemplateStringsArray) => css`
  border-top-width: ${parseBorderWidth(value?.[0] || "1px")};
`;
export const border_r = (value?: TemplateStringsArray) => css`
  border-right-width: ${parseBorderWidth(value?.[0] || "1px")};
`;
export const border_b = (value?: TemplateStringsArray) => css`
  border-bottom-width: ${parseBorderWidth(value?.[0] || "1px")};
`;
export const border_l = (value?: TemplateStringsArray) => css`
  border-left-width: ${parseBorderWidth(value?.[0] || "1px")};
`;

// divide utilities not included because of complicated selectors
