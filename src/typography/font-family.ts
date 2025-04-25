import { css } from "css-native";

export const font = (family: TemplateStringsArray) => css`
  font-family: ${family[0]};
`;
export const font_sans = font`var(--font-sans)`;
export const font_serif = font`var(--font-serif)`;
export const font_mono = font`var(--font-mono)`;
