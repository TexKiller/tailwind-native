import { css } from "css-native";

const parseMaxHeight = (value: string) =>
  value.includes("/")
    ? `calc(${value} * 100%)`
    : (/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value) &&
        `calc(var(--spacing) * ${value})`) ||
      value;
export const max_h = (value: string) => css`
  max-height: ${parseMaxHeight(value)};
`;
export const max_h_px = max_h(`1px`);
export const max_h_full = max_h(`100%`);
export const max_h_screen = max_h(`100vh`);
export const max_h_dvh = max_h(`100dvh`);
export const max_h_dvw = max_h(`100dvw`);
export const max_h_lvh = max_h(`100lvh`);
export const max_h_lvw = max_h(`100lvw`);
export const max_h_svh = max_h(`100svh`);
export const max_h_svw = max_h(`100svw`);
export const max_h_auto = max_h(`auto`);
export const max_h_min = max_h(`min-content`);
export const max_h_max = max_h(`max-content`);
export const max_h_fit = max_h(`fit-content`);
