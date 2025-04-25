import { css } from "css-native";

const mediaQuery =
  (constraint: string) =>
  (...styles: Parameters<typeof css>) => {
    const consolidated = css(...styles);
    (consolidated as any)[0] = [
      `@media (${constraint}) {\n` + consolidated[0][0],
      ...consolidated[0].slice(1, consolidated[0].length - 1),
      consolidated[0][consolidated[0].length - 1] + "\n}",
    ];
    return consolidated;
  };
export const min = (constraint: TemplateStringsArray) =>
  mediaQuery(`min-width: ${constraint[0]}`);
export const sm = min`40rem`;
export const md = min`48rem`;
export const lg = min`64rem`;
export const xl = min`80rem`;
export const xxl = min`96rem`;
export const max = (constraint: TemplateStringsArray) =>
  mediaQuery(`max-width: ${constraint[0]}`);
export const max_sm = max`40rem`;
export const max_md = max`48rem`;
export const max_lg = max`64rem`;
export const max_xl = max`80rem`;
export const max_xxl = max`96rem`;
export const dark = mediaQuery("prefers-color-scheme: dark");
export const motion_reduce = mediaQuery("prefers-reduced-motion: reduce");
export const contrast_more = mediaQuery("prefers-contrast: more");
export const contrast_less = mediaQuery("prefers-contrast: less");
export const forced_colors = mediaQuery("forced-colors: active");
export const inverted_colors = mediaQuery("inverted-colors: inverted");
export const pointer_fine = mediaQuery("pointer: fine");
export const pointer_coarse = mediaQuery("pointer: coarse");
export const pointer_none = mediaQuery("pointer: none");
export const any_pointer_fine = mediaQuery("any-pointer: fine");
export const any_pointer_coarse = mediaQuery("any-pointer: coarse");
export const any_pointer_none = mediaQuery("any-pointer: none");
export const portrait = mediaQuery("orientation: portrait");
export const landscape = mediaQuery("orientation: landscape");
export const noscript = mediaQuery("scripting: none");

// container queries are skipped for now
