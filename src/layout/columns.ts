import { css } from "css-native";

export const columns = (count: string) => css`
  columns: ${count};
`;
export const columns_3xs = columns("var(--container-3xs, 16rem)");
export const columns_2xs = columns("var(--container-2xs, 18rem)");
export const columns_xs = columns("var(--container-xs, 20rem)");
export const columns_sm = columns("var(--container-sm, 24rem)");
export const columns_md = columns("var(--container-md, 28rem)");
export const columns_lg = columns("var(--container-lg, 32rem)");
export const columns_xl = columns("var(--container-xl, 36rem)");
export const columns_2xl = columns("var(--container-2xl, 42rem)");
export const columns_3xl = columns("var(--container-3xl, 48rem)");
export const columns_4xl = columns("var(--container-4xl, 56rem)");
export const columns_5xl = columns("var(--container-5xl, 64rem)");
export const columns_6xl = columns("var(--container-6xl, 72rem)");
export const columns_7xl = columns("var(--container-7xl, 80rem)");
export const columns_auto = columns("auto");
