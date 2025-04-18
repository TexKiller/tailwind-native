import { css } from "css-native";

const parseMargin = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?$/.test(value)
    ? `calc(var(--spacing) * ${value})`
    : value;
export const m = (value: string) => css`
  margin: ${parseMargin(value)};
`;
export const m_px = m(`1px`);
export const _m_px = m(`-1px`);
export const mx = (value: string) => css`
  margin-inline: ${parseMargin(value)};
`;
export const mx_px = mx(`1px`);
export const _mx_px = mx(`-1px`);
export const my = (value: string) => css`
  margin-block: ${parseMargin(value)};
`;
export const my_px = my(`1px`);
export const _my_px = my(`-1px`);
export const ms = (value: string) => css`
  margin-inline-start: ${parseMargin(value)};
`;
export const ms_px = ms(`1px`);
export const _ms_px = ms(`-1px`);
export const me = (value: string) => css`
  margin-inline-end: ${parseMargin(value)};
`;
export const me_px = me(`1px`);
export const _me_px = me(`-1px`);
export const mt = (value: string) => css`
  margin-top: ${parseMargin(value)};
`;
export const mt_px = mt(`1px`);
export const _mt_px = mt(`-1px`);
export const mr = (value: string) => css`
  margin-right: ${parseMargin(value)};
`;
export const mr_px = mr(`1px`);
export const _mr_px = mr(`-1px`);
export const mb = (value: string) => css`
  margin-bottom: ${parseMargin(value)};
`;
export const mb_px = mb(`1px`);
export const _mb_px = mb(`-1px`);
export const ml = (value: string) => css`
  margin-left: ${parseMargin(value)};
`;
export const ml_px = ml(`1px`);
export const _ml_px = ml(`-1px`);

// space utilities not included because of complicated selectors
