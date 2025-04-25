import { css } from "css-native";

const parseTranslate = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?/.test(value)
    ? `calc(var(--spacing) * ${value})`
    : (/^-?(0|[1-9]\d*)(\.\d*)\/-?(0|[1-9]\d*)(\.\d*)?/.test(value) &&
        `calc(${value} * 100%)`) ||
      value;
export const translate = (value: TemplateStringsArray) => css`
  translate: ${parseTranslate(value[0])} ${parseTranslate(value[0])};
`;
export const translate_full = translate`100%`;
export const _translate_full = translate`-100%`;
export const translate_px = translate`1px`;
export const _translate_px = translate`-1px`;
export const translate_x = (value: TemplateStringsArray) => css`
  translate: ${parseTranslate(value[0])} var(--tw-translate-y);
`;
export const translate_x_full = translate_x`100%`;
export const _translate_x_full = translate_x`-100%`;
export const translate_x_px = translate_x`1px`;
export const _translate_x_px = translate_x`-1px`;
export const translate_y = (value: TemplateStringsArray) => css`
  translate: var(--tw-translate-x) ${parseTranslate(value[0])};
`;
export const translate_y_full = translate_y`100%`;
export const _translate_y_full = translate_y`-100%`;
export const translate_y_px = translate_y`1px`;
export const _translate_y_px = translate_y`-1px`;
export const translate_z = (value: TemplateStringsArray) => css`
  translate: var(--tw-translate-x) var(--tw-translate-y)
    ${parseTranslate(value[0])};
`;
export const translate_z_px = translate_z`1px`;
export const _translate_z_px = translate_z`-1px`;
