import { css } from "css-native";

const parseBasis = (value: string) =>
  value.includes("/")
    ? `calc(${value} * 100%)`
    : (/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value) &&
        `calc(var(--spacing) * ${value})`) ||
      value;
export const basis = (value: string) => css`
  flex-basis: ${parseBasis(value)};
`;
export const basis_full = basis(`100%`);
export const basis_auto = basis(`auto`);
export const basis_3xs = basis(`var(--container-3xs, 16rem)`);
export const basis_2xs = basis(`var(--container-2xs, 18rem)`);
export const basis_xs = basis(`var(--container-xs, 20rem)`);
export const basis_sm = basis(`var(--container-sm, 24rem)`);
export const basis_md = basis(`var(--container-md, 28rem)`);
export const basis_lg = basis(`var(--container-lg, 32rem)`);
export const basis_xl = basis(`var(--container-xl, 36rem)`);
export const basis_2xl = basis(`var(--container-2xl, 42rem)`);
export const basis_3xl = basis(`var(--container-3xl, 48rem)`);
export const basis_4xl = basis(`var(--container-4xl, 56rem)`);
export const basis_5xl = basis(`var(--container-5xl, 64rem)`);
export const basis_6xl = basis(`var(--container-6xl, 72rem)`);
export const basis_7xl = basis(`var(--container-7xl, 80rem)`);
