import { css } from "css-native";

const mixBlendMode = (value: string) => css`
  mix-blend-mode: ${value};
`;
export const mix_blend_normal = mixBlendMode("normal");
export const mix_blend_multiply = mixBlendMode("multiply");
export const mix_blend_screen = mixBlendMode("screen");
export const mix_blend_overlay = mixBlendMode("overlay");
export const mix_blend_darken = mixBlendMode("darken");
export const mix_blend_lighten = mixBlendMode("lighten");
export const mix_blend_color_dodge = mixBlendMode("color-dodge");
export const mix_blend_color_burn = mixBlendMode("color-burn");
export const mix_blend_hard_light = mixBlendMode("hard-light");
export const mix_blend_soft_light = mixBlendMode("soft-light");
export const mix_blend_difference = mixBlendMode("difference");
export const mix_blend_exclusion = mixBlendMode("exclusion");
export const mix_blend_hue = mixBlendMode("hue");
export const mix_blend_saturation = mixBlendMode("saturation");
export const mix_blend_color = mixBlendMode("color");
export const mix_blend_luminosity = mixBlendMode("luminosity");
export const mix_blend_plus_darker = mixBlendMode("plus-darker");
export const mix_blend_plus_lighter = mixBlendMode("plus-lighter");
