import { css } from "css-native";

const parseScale = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?/.test(value) ? value + "%" : value;
export const scale = (value: TemplateStringsArray) =>
  parseScale(value[0]) !== value[0]
    ? css`
        scale: ${parseScale(value[0])} ${parseScale(value[0])};
      `
    : css`
        scale: ${value[0]};
      `;
export const scale_none = scale`none`;
export const scale_x = (value: TemplateStringsArray) => css`
  scale: ${parseScale(value[0])} var(--tw-scale-y);
`;
export const scale_y = (value: TemplateStringsArray) => css`
  scale: var(--tw-scale-x) ${parseScale(value[0])};
`;
export const scale_z = (value: TemplateStringsArray) => css`
  scale: var(--tw-scale-x) var(--tw-scale-y) ${parseScale(value[0])};
`;
