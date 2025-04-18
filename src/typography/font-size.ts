import { css } from "css-native";

export const text_size = (size: string) => css`
  font-size: ${size};
`;
const textVariant = (variant: string) => css`
  font-size: var(--text-${variant});
  line-height: var(--text-${variant}-line-height);
`;
export const text_xs = textVariant("xs");
export const text_sm = textVariant("sm");
export const text_base = textVariant("base");
export const text_lg = textVariant("lg");
export const text_xl = textVariant("xl");
export const text_2xl = textVariant("2xl");
export const text_3xl = textVariant("3xl");
export const text_4xl = textVariant("4xl");
export const text_5xl = textVariant("5xl");
export const text_6xl = textVariant("6xl");
export const text_7xl = textVariant("7xl");
export const text_8xl = textVariant("8xl");
export const text_9xl = textVariant("9xl");
