import { css } from "css-native";

const pseudoClass =
  (name: string) =>
  (...styles: Parameters<typeof css>) => {
    const consolidated = css(...styles);
    (consolidated as any)[0][0] = `&:${name} {\n` + consolidated[0][0];
    (consolidated as any)[0][consolidated[0].length - 1] =
      consolidated[0][consolidated[0].length - 1] + "\n}";
    return consolidated;
  };
export const hover = pseudoClass("hover");
export const active = pseudoClass("active");
export const focus = pseudoClass("focus");

// other pseudo classes are skipped for now
