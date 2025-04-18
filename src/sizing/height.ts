import { css } from "css-native";

const parseHeight = (value: string) =>
  value.includes("/")
    ? `calc(${value} * 100%)`
    : (/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value) &&
        `calc(var(--spacing) * ${value})`) ||
      value;
export const h = (value: string) => css`
  height: ${parseHeight(value)};
`;
export const h_auto = h(`auto`);
export const h_px = h(`1px`);
export const h_full = h(`100%`);
export const h_screen = h(`100vh`);
export const h_dvh = h(`100dvh`);
export const h_dvw = h(`100dvw`);
export const h_lvh = h(`100lvh`);
export const h_lvw = h(`100lvw`);
export const h_svh = h(`100svh`);
export const h_svw = h(`100svw`);
export const h_min = h(`min-content`);
export const h_max = h(`max-content`);
export const h_fit = h(`fit-content`);
