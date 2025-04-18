import { css } from "css-native";

const parseMinWidth = (value: string) =>
  value.includes("/")
    ? `calc(${value} * 100%)`
    : (/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value) &&
        `calc(var(--spacing) * ${value})`) ||
      value;
export const min_w = (value: string) => css`
  min-width: ${parseMinWidth(value)};
`;
export const min_w_3xs = min_w(`var(--container-3xs, 16rem)`);
export const min_w_2xs = min_w(`var(--container-2xs, 18rem)`);
export const min_w_xs = min_w(`var(--container-xs, 20rem)`);
export const min_w_sm = min_w(`var(--container-sm, 24rem)`);
export const min_w_md = min_w(`var(--container-md, 28rem)`);
export const min_w_lg = min_w(`var(--container-lg, 32rem)`);
export const min_w_xl = min_w(`var(--container-xl, 36rem)`);
export const min_w_2xl = min_w(`var(--container-2xl, 42rem)`);
export const min_w_3xl = min_w(`var(--container-3xl, 48rem)`);
export const min_w_4xl = min_w(`var(--container-4xl, 56rem)`);
export const min_w_5xl = min_w(`var(--container-5xl, 64rem)`);
export const min_w_6xl = min_w(`var(--container-6xl, 72rem)`);
export const min_w_7xl = min_w(`var(--container-7xl, 80rem)`);
export const min_w_auto = min_w(`auto`);
export const min_w_px = min_w(`1px`);
export const min_w_full = min_w(`100%`);
export const min_w_screen = min_w(`100vw`);
export const min_w_dvw = min_w(`100dvw`);
export const min_w_dvh = min_w(`100dvh`);
export const min_w_lvw = min_w(`100lvw`);
export const min_w_lvh = min_w(`100lvh`);
export const min_w_svw = min_w(`100svw`);
export const min_w_svh = min_w(`100svh`);
export const min_w_min = min_w(`min-content`);
export const min_w_max = min_w(`max-content`);
export const min_w_fit = min_w(`fit-content`);
