import { css } from "css-native";

const parseMinHeight = (value: string) =>
  value.includes("/")
    ? `calc(${value} * 100%)`
    : (/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value) &&
        `calc(var(--spacing) * ${value})`) ||
      value;
export const min_h = (value: TemplateStringsArray) => css`
  min-height: ${parseMinHeight(value[0])};
`;
export const min_h_px = min_h`1px`;
export const min_h_full = min_h`100%`;
export const min_h_screen = min_h`100vh`;
export const min_h_dvh = min_h`100dvh`;
export const min_h_dvw = min_h`100dvw`;
export const min_h_lvh = min_h`100lvh`;
export const min_h_lvw = min_h`100lvw`;
export const min_h_svh = min_h`100svh`;
export const min_h_svw = min_h`100svw`;
export const min_h_auto = min_h`auto`;
export const min_h_min = min_h`min-content`;
export const min_h_max = min_h`max-content`;
export const min_h_fit = min_h`fit-content`;
