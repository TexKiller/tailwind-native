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
export const bg_linear = (value: string) =>
  backgroundImage(
    `linear-gradient(${
      /-?(0|[1-9]\d*)?(.\d*)?$/.test(value)
        ? value + " in oklab, var(--tw-gradient-stops)"
        : "var(--tw-gradient-stops, " + value + ")"
    })`,
  );
export const bg_radial = (value: string) =>
  backgroundImage(
    `radial-gradient(${
      value
        ? "var(--tw-gradient-stops, " + value + ")"
        : "in oklab, var(--tw-gradient-stops)"
    })`,
  );
export const bg_conic = (value: string) =>
  backgroundImage(
    /-?(0|[1-9]\d*)?(.\d*)?$/.test(value)
      ? `conic-gradient(from ${value} in oklab, var(--tw-gradient-stops)`
      : value,
  );
export const from = (value: string) =>
  /-?(0|[1-9]\d*)?(.\d*)?%$/.test(value)
    ? css`
        --tw-gradient-from-position: ${value};
      `
    : css`
        --tw-gradient-from: ${value};
      `;
export const via = (value: string) =>
  /-?(0|[1-9]\d*)?(.\d*)?%$/.test(value)
    ? css`
        --tw-gradient-via-position: ${value};
      `
    : css`
        --tw-gradient-via: ${value};
      `;
export const to = (value: string) =>
  /-?(0|[1-9]\d*)?(.\d*)?%$/.test(value)
    ? css`
        --tw-gradient-to-position: ${value};
      `
    : css`
        --tw-gradient-to: ${value};
      `;
