import { css } from "css-native";

const parsePadding = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?$/.test(value)
    ? `calc(var(--spacing) * ${value})`
    : value;
export const p = (value: string) => css`
  padding: ${parsePadding(value)};
`;
export const p_px = p(`1px`);
export const px = (value: string) => css`
  padding-inline: ${parsePadding(value)};
`;
export const px_px = px(`1px`);
export const py = (value: string) => css`
  padding-block: ${parsePadding(value)};
`;
export const py_px = py(`1px`);
export const ps = (value: string) => css`
  padding-inline-start: ${parsePadding(value)};
`;
export const ps_px = ps(`1px`);
export const pe = (value: string) => css`
  padding-inline-end: ${parsePadding(value)};
`;
export const pe_px = pe(`1px`);
export const pt = (value: string) => css`
  padding-top: ${parsePadding(value)};
`;
export const pt_px = pt(`1px`);
export const pr = (value: string) => css`
  padding-right: ${parsePadding(value)};
`;
export const pr_px = pr(`1px`);
export const pb = (value: string) => css`
  padding-bottom: ${parsePadding(value)};
`;
export const pb_px = pb(`1px`);
export const pl = (value: string) => css`
  padding-left: ${parsePadding(value)};
`;
export const pl_px = pl(`1px`);
