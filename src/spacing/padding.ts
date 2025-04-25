import { css } from "css-native";

const parsePadding = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?$/.test(value)
    ? `calc(var(--spacing) * ${value})`
    : value;
export const p = (value: TemplateStringsArray) => css`
  padding: ${parsePadding(value[0])};
`;
export const p_px = p`1px`;
export const px = (value: TemplateStringsArray) => css`
  padding-inline: ${parsePadding(value[0])};
`;
export const px_px = px`1px`;
export const py = (value: TemplateStringsArray) => css`
  padding-block: ${parsePadding(value[0])};
`;
export const py_px = py`1px`;
export const ps = (value: TemplateStringsArray) => css`
  padding-inline-start: ${parsePadding(value[0])};
`;
export const ps_px = ps`1px`;
export const pe = (value: TemplateStringsArray) => css`
  padding-inline-end: ${parsePadding(value[0])};
`;
export const pe_px = pe`1px`;
export const pt = (value: TemplateStringsArray) => css`
  padding-top: ${parsePadding(value[0])};
`;
export const pt_px = pt`1px`;
export const pr = (value: TemplateStringsArray) => css`
  padding-right: ${parsePadding(value[0])};
`;
export const pr_px = pr`1px`;
export const pb = (value: TemplateStringsArray) => css`
  padding-bottom: ${parsePadding(value[0])};
`;
export const pb_px = pb`1px`;
export const pl = (value: TemplateStringsArray) => css`
  padding-left: ${parsePadding(value[0])};
`;
export const pl_px = pl`1px`;
