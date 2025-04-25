import { css } from "css-native";

const parseWidth = (value: string) =>
  value.includes("/")
    ? `calc(${value} * 100%)`
    : (/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value) &&
        `calc(var(--spacing) * ${value})`) ||
      value;
export const w = (value: TemplateStringsArray) => css`
  width: ${parseWidth(value[0])};
`;
export const w_3xs = w`var(--container-3xs, 16rem)`;
export const w_2xs = w`var(--container-2xs, 18rem)`;
export const w_xs = w`var(--container-xs, 20rem)`;
export const w_sm = w`var(--container-sm, 24rem)`;
export const w_md = w`var(--container-md, 28rem)`;
export const w_lg = w`var(--container-lg, 32rem)`;
export const w_xl = w`var(--container-xl, 36rem)`;
export const w_2xl = w`var(--container-2xl, 42rem)`;
export const w_3xl = w`var(--container-3xl, 48rem)`;
export const w_4xl = w`var(--container-4xl, 56rem)`;
export const w_5xl = w`var(--container-5xl, 64rem)`;
export const w_6xl = w`var(--container-6xl, 72rem)`;
export const w_7xl = w`var(--container-7xl, 80rem)`;
export const w_auto = w`auto`;
export const w_px = w`1px`;
export const w_full = w`100%`;
export const w_screen = w`100vw`;
export const w_dvw = w`100dvw`;
export const w_dvh = w`100dvh`;
export const w_lvw = w`100lvw`;
export const w_lvh = w`100lvh`;
export const w_svw = w`100svw`;
export const w_svh = w`100svh`;
export const w_min = w`min-content`;
export const w_max = w`max-content`;
export const w_fit = w`fit-content`;
export const size = (value: TemplateStringsArray) => css`
  width: ${parseWidth(value[0])};
  height: ${parseWidth(value[0])};
`;
export const size_auto = size`auto`;
export const size_px = size`1px`;
export const size_full = size`100%`;
export const size_dvw = size`100dvw`;
export const size_dvh = size`100dvh`;
export const size_lvw = size`100lvw`;
export const size_lvh = size`100lvh`;
export const size_svw = size`100svw`;
export const size_svh = size`100svh`;
export const size_min = size`min-content`;
export const size_max = size`max-content`;
export const size_fit = size`fit-content`;
