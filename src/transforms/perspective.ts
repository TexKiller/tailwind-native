import { css } from "css-native";

export const perspective = (value: TemplateStringsArray) => css`
  perspective: ${value[0]};
`;
export const perspective_dramatic = perspective`var(--perspective-dramatic)`;
export const perspective_near = perspective`var(--perspective-near)`;
export const perspective_normal = perspective`var(--perspective-normal)`;
export const perspective_midrange = perspective`var(--perspective-midrange)`;
export const perspective_distant = perspective`var(--perspective-distant)`;
export const perspective_none = perspective`none`;
