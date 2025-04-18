import { css } from "css-native";

const parseInset = (value: string) =>
  value.includes("/")
    ? `calc(${value} * 100%)`
    : (/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value) &&
        `calc(var(--spacing) * ${value})`) ||
      value;
export const inset = (value: string) => css`
  inset: ${parseInset(value)};
`;
export const inset_px = inset(`1px`);
export const _inset_px = inset(`-1px`);
export const inset_full = inset(`100%`);
export const _inset_full = inset(`-100%`);
export const inset_auto = inset(`auto`);
export const inset_x = (value: string) => css`
  inset-inline: ${parseInset(value)};
`;
export const inset_x_px = inset_x(`1px`);
export const _inset_x_px = inset_x(`-1px`);
export const inset_x_full = inset_x(`100%`);
export const _inset_x_full = inset_x(`-100%`);
export const inset_x_auto = inset_x(`auto`);
export const inset_y = (value: string) => css`
  inset-block: ${parseInset(value)};
`;
export const inset_y_px = inset_y(`1px`);
export const _inset_y_px = inset_y(`-1px`);
export const inset_y_full = inset_y(`100%`);
export const _inset_y_full = inset_y(`-100%`);
export const inset_y_auto = inset_y(`auto`);
export const start = (value: string) => css`
  inset-inline-start: ${parseInset(value)};
`;
export const start_px = start(`1px`);
export const _start_px = start(`-1px`);
export const start_full = start(`100%`);
export const _start_full = start(`-100%`);
export const start_auto = start(`auto`);
export const end = (value: string) => css`
  inset-inline-end: ${parseInset(value)};
`;
export const end_px = end(`1px`);
export const _end_px = end(`-1px`);
export const end_full = end(`100%`);
export const _end_full = end(`-100%`);
export const end_auto = end(`auto`);
export const top = (value: string) => css`
  top: ${parseInset(value)};
`;
export const top_px = top(`1px`);
export const _top_px = top(`-1px`);
export const top_full = top(`100%`);
export const _top_full = top(`-100%`);
export const top_auto = top(`auto`);
export const right = (value: string) => css`
  right: ${parseInset(value)};
`;
export const right_px = right(`1px`);
export const _right_px = right(`-1px`);
export const right_full = right(`100%`);
export const _right_full = right(`-100%`);
export const right_auto = right(`auto`);
export const bottom = (value: string) => css`
  bottom: ${parseInset(value)};
`;
export const bottom_px = bottom(`1px`);
export const _bottom_px = bottom(`-1px`);
export const bottom_full = bottom(`100%`);
export const _bottom_full = bottom(`-100%`);
export const bottom_auto = bottom(`auto`);
export const left = (value: string) => css`
  left: ${parseInset(value)};
`;
export const left_px = left(`1px`);
export const _left_px = left(`-1px`);
export const left_full = left(`100%`);
export const _left_full = left(`-100%`);
export const left_auto = left(`auto`);
