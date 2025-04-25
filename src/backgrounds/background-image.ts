import { css } from "css-native";

const backgroundImage = (value: string) => css`
  background-image: ${value};
`;
export const bg_none = backgroundImage("none");
export const bg_linear_to_t = backgroundImage(
  "linear-gradient(to top, var(--tw-gradient-stops))",
);
export const bg_linear_to_tr = backgroundImage(
  "linear-gradient(to top right, var(--tw-gradient-stops))",
);
export const bg_linear_to_r = backgroundImage(
  "linear-gradient(to right, var(--tw-gradient-stops))",
);
export const bg_linear_to_br = backgroundImage(
  "linear-gradient(to bottom right, var(--tw-gradient-stops))",
);
export const bg_linear_to_b = backgroundImage(
  "linear-gradient(to bottom, var(--tw-gradient-stops))",
);
export const bg_linear_to_bl = backgroundImage(
  "linear-gradient(to bottom left, var(--tw-gradient-stops))",
);
export const bg_linear_to_l = backgroundImage(
  "linear-gradient(to left, var(--tw-gradient-stops))",
);
export const bg_linear_to_tl = backgroundImage(
  "linear-gradient(to top left, var(--tw-gradient-stops))",
);
export const bg_linear = (value: TemplateStringsArray) =>
  backgroundImage(
    `linear-gradient(${
      /^-?(0|[1-9]\d*)?(.\d*)?$/.test(value[0])
        ? value[0] + " in oklab, var(--tw-gradient-stops)"
        : "var(--tw-gradient-stops, " + value[0] + ")"
    })`,
  );
export const bg_radial = (value?: TemplateStringsArray) =>
  backgroundImage(
    `radial-gradient(${
      value
        ? "var(--tw-gradient-stops, " + value[0] + ")"
        : "in oklab, var(--tw-gradient-stops)"
    })`,
  );
export const bg_conic = (value: TemplateStringsArray) =>
  backgroundImage(
    /^-?(0|[1-9]\d*)?(.\d*)?$/.test(value[0])
      ? `conic-gradient(from ${value[0]} in oklab, var(--tw-gradient-stops)`
      : value[0],
  );
export const from = (value: TemplateStringsArray) =>
  /^-?(0|[1-9]\d*)?(.\d*)?%$/.test(value[0])
    ? css`
        --tw-gradient-from-position: ${value[0]};
      `
    : css`
        --tw-gradient-from: ${value[0]};
      `;
export const via = (value: TemplateStringsArray) =>
  /^-?(0|[1-9]\d*)?(.\d*)?%$/.test(value[0])
    ? css`
        --tw-gradient-via-position: ${value[0]};
      `
    : css`
        --tw-gradient-via: ${value[0]};
      `;
export const to = (value: TemplateStringsArray) =>
  /^-?(0|[1-9]\d*)?(.\d*)?%$/.test(value[0])
    ? css`
        --tw-gradient-to-position: ${value[0]};
      `
    : css`
        --tw-gradient-to: ${value[0]};
      `;
