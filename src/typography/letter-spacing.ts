import { css } from "css-native";

export const tracking = (spacing: string) => css`
  letter-spacing: ${spacing};
`;
export const tracking_tighter = tracking("var(--tracking-tighter)");
export const tracking_tight = tracking("var(--tracking-tight)");
export const tracking_normal = tracking("var(--tracking-normal)");
export const tracking_wide = tracking("var(--tracking-wide)");
export const tracking_wider = tracking("var(--tracking-wider)");
export const tracking_widest = tracking("var(--tracking-widest)");
