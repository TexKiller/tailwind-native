import { css } from "css-native";

const parseMaxWidth = (value: string) =>
  value.includes("/")
    ? `calc(${value} * 100%)`
    : (/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value) &&
        `calc(var(--spacing) * ${value})`) ||
      value;
export const max_w = (value: TemplateStringsArray) => css`
  max-width: ${parseMaxWidth(value[0])};
`;
export const max_w_3xs = max_w`var(--container-3xs, 16rem)`;
export const max_w_2xs = max_w`var(--container-2xs, 18rem)`;
export const max_w_xs = max_w`var(--container-xs, 20rem)`;
export const max_w_sm = max_w`var(--container-sm, 24rem)`;
export const max_w_md = max_w`var(--container-md, 28rem)`;
export const max_w_lg = max_w`var(--container-lg, 32rem)`;
export const max_w_xl = max_w`var(--container-xl, 36rem)`;
export const max_w_2xl = max_w`var(--container-2xl, 42rem)`;
export const max_w_3xl = max_w`var(--container-3xl, 48rem)`;
export const max_w_4xl = max_w`var(--container-4xl, 56rem)`;
export const max_w_5xl = max_w`var(--container-5xl, 64rem)`;
export const max_w_6xl = max_w`var(--container-6xl, 72rem)`;
export const max_w_7xl = max_w`var(--container-7xl, 80rem)`;
export const max_w_auto = max_w`auto`;
export const max_w_px = max_w`1px`;
export const max_w_full = max_w`100%`;
export const max_w_screen = max_w`100vw`;
export const max_w_dvw = max_w`100dvw`;
export const max_w_dvh = max_w`100dvh`;
export const max_w_lvw = max_w`100lvw`;
export const max_w_lvh = max_w`100lvh`;
export const max_w_svw = max_w`100svw`;
export const max_w_svh = max_w`100svh`;
export const max_w_min = max_w`min-content`;
export const max_w_max = max_w`max-content`;
export const max_w_fit = max_w`fit-content`;
export const container = css`
  width: 100%;
  @media (width >= 40rem) {
    max-width: 40rem;
  }
  @media (width >= 48rem) {
    max-width: 48rem;
  }
  @media (width >= 64rem) {
    max-width: 64rem;
  }
  @media (width >= 80rem) {
    max-width: 80rem;
  }
  @media (width >= 96rem) {
    max-width: 96rem;
  }
`;
