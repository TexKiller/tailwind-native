import { css } from "css-native";

const parseMargin = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?$/.test(value)
    ? `calc(var(--spacing) * ${value})`
    : value;
export const m = (value: TemplateStringsArray) => css`
  margin: ${parseMargin(value[0])};
`;
export const m_px = m`1px`;
export const _m_px = m`-1px`;
export const mx = (value: TemplateStringsArray) => css`
  margin-inline: ${parseMargin(value[0])};
`;
export const mx_px = mx`1px`;
export const _mx_px = mx`-1px`;
export const my = (value: TemplateStringsArray) => css`
  margin-block: ${parseMargin(value[0])};
`;
export const my_px = my`1px`;
export const _my_px = my`-1px`;
export const ms = (value: TemplateStringsArray) => css`
  margin-inline-start: ${parseMargin(value[0])};
`;
export const ms_px = ms`1px`;
export const _ms_px = ms`-1px`;
export const me = (value: TemplateStringsArray) => css`
  margin-inline-end: ${parseMargin(value[0])};
`;
export const me_px = me`1px`;
export const _me_px = me`-1px`;
export const mt = (value: TemplateStringsArray) => css`
  margin-top: ${parseMargin(value[0])};
`;
export const mt_px = mt`1px`;
export const _mt_px = mt`-1px`;
export const mr = (value: TemplateStringsArray) => css`
  margin-right: ${parseMargin(value[0])};
`;
export const mr_px = mr`1px`;
export const _mr_px = mr`-1px`;
export const mb = (value: TemplateStringsArray) => css`
  margin-bottom: ${parseMargin(value[0])};
`;
export const mb_px = mb`1px`;
export const _mb_px = mb`-1px`;
export const ml = (value: TemplateStringsArray) => css`
  margin-left: ${parseMargin(value[0])};
`;
export const ml_px = ml`1px`;
export const _ml_px = ml`-1px`;

// space utilities not included because of complicated selectors
