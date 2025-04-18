import { css } from "css-native";

const fontVariantNumeric = (variant: string) => css`
  font-variant-numeric: ${variant};
`;
export const normal_nums = fontVariantNumeric("normal");
export const ordinal_nums = fontVariantNumeric("ordinal");
export const slashed_zero = fontVariantNumeric("slashed-zero");
export const lining_nums = fontVariantNumeric("lining-nums");
export const oldstyle_nums = fontVariantNumeric("oldstyle-nums");
export const proportional_nums = fontVariantNumeric("proportional-nums");
export const tabular_nums = fontVariantNumeric("tabular-nums");
export const diagonal_fractions = fontVariantNumeric("diagonal-fractions");
export const stacked_fractions = fontVariantNumeric("stacked-fractions");
