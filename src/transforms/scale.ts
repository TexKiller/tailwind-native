import { css } from "css-native";

const parseScale = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?/.test(value) ? value + "%" : value;
export const scale = (value: string) =>
  parseScale(value) !== value
    ? css`
        scale: ${parseScale(value)} ${parseScale(value)};
      `
    : css`
        scale: ${value};
      `;
export const scale_none = scale("none");
export const scale_x = (value: string) => css`
  scale: ${parseScale(value)} var(--tw-scale-y);
`;
export const scale_y = (value: string) => css`
  scale: var(--tw-scale-x) ${parseScale(value)};
`;
export const scale_z = (value: string) => css`
  scale: var(--tw-scale-x) var(--tw-scale-y) ${parseScale(value)};
`;
