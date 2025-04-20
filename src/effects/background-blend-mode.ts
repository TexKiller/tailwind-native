import { css } from "css-native";

const backgroundBlendMode = (value: string) => css`
  background-blend-mode: ${value};
`;

export const bg_blend_normal = backgroundBlendMode("normal");
export const bg_blend_multiply = backgroundBlendMode("multiply");
export const bg_blend_screen = backgroundBlendMode("screen");
export const bg_blend_overlay = backgroundBlendMode("overlay");
export const bg_blend_darken = backgroundBlendMode("darken");
export const bg_blend_lighten = backgroundBlendMode("lighten");
export const bg_blend_color_dodge = backgroundBlendMode("color-dodge");
export const bg_blend_color_burn = backgroundBlendMode("color-burn");
export const bg_blend_hard_light = backgroundBlendMode("hard-light");
export const bg_blend_soft_light = backgroundBlendMode("soft-light");
export const bg_blend_difference = backgroundBlendMode("difference");
export const bg_blend_exclusion = backgroundBlendMode("exclusion");
export const bg_blend_hue = backgroundBlendMode("hue");
export const bg_blend_saturation = backgroundBlendMode("saturation");
export const bg_blend_color = backgroundBlendMode("color");
export const bg_blend_luminosity = backgroundBlendMode("luminosity");
