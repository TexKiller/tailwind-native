import { css } from "css-native";

export const mask = (value: TemplateStringsArray) => css`
  mask-image: ${value[0]};
`;
export const mask_none = mask`none`;
export const mask_linear = (value: TemplateStringsArray) =>
  mask([
    `linear-gradient(${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?$/.test(value[0])
        ? value[0] + "deg"
        : value[0]
    }, black var(--tw-mask-linear-from), transparent var(--tw-mask-linear-to))`,
  ] as any);
export const mask_linear_from = (value: TemplateStringsArray) =>
  mask([
    `linear-gradient(var(--tw-mask-linear-position), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "black " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }, transparent var(--tw-mask-linear-to))`,
  ] as any);
export const mask_linear_to = (value: TemplateStringsArray) =>
  mask([
    `linear-gradient(var(--tw-mask-linear-position), black var(--tw-mask-linear-from), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "transparent " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    })`,
  ] as any);
export const mask_t_from = (value: TemplateStringsArray) =>
  mask([
    `linear-gradient(to top, ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "black " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }, transparent var(--tw-mask-top-to))`,
  ] as any);
export const mask_t_to = (value: TemplateStringsArray) =>
  mask([
    `linear-gradient(to top, black var(--tw-mask-top-from), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "transparent " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    })`,
  ] as any);
export const mask_r_from = (value: TemplateStringsArray) =>
  mask([
    `linear-gradient(to right, ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "black " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value + ")")
        : value[0]
    }, transparent var(--tw-mask-right-to))`,
  ] as any);
export const mask_r_to = (value: TemplateStringsArray) =>
  mask([
    `linear-gradient(to right, black var(--tw-mask-right-from), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "transparent " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    })`,
  ] as any);
export const mask_b_from = (value: TemplateStringsArray) =>
  mask([
    `linear-gradient(to bottom, ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "black " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }, transparent var(--tw-mask-bottom-to))`,
  ] as any);
export const mask_b_to = (value: TemplateStringsArray) =>
  mask([
    `linear-gradient(to bottom, black var(--tw-mask-bottom-from), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "transparent " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    })`,
  ] as any);
export const mask_l_from = (value: TemplateStringsArray) =>
  mask([
    `linear-gradient(to left, ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "black " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }, transparent var(--tw-mask-left-to))`,
  ] as any);
export const mask_l_to = (value: TemplateStringsArray) =>
  mask([
    `linear-gradient(to left, black var(--tw-mask-left-from), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "transparent " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    })`,
  ] as any);
const maskAxis = (value: string) => css`
  mask-image: linear-gradient(${value});
  mask-composite: intersect;
`;
export const mask_y_from = (value: TemplateStringsArray) =>
  maskAxis(
    `to top, ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "black " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }, transparent var(--tw-mask-top-to)), linear-gradient(to bottom, ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "black " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }, transparent var(--tw-mask-bottom-to))`,
  );
export const mask_y_to = (value: TemplateStringsArray) =>
  maskAxis(
    `to top, black var(--tw-mask-top-from), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "transparent " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }), linear-gradient(to bottom, black var(--tw-mask-bottom-from), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "transparent " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    })`,
  );
export const mask_x_from = (value: TemplateStringsArray) =>
  maskAxis(
    `to right, ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "black " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }, transparent var(--tw-mask-right-to)), linear-gradient(to left, ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "black " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }, transparent var(--tw-mask-left-to))`,
  );
export const mask_x_to = (value: TemplateStringsArray) =>
  maskAxis(
    `to right, black var(--tw-mask-right-from), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "transparent " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }), linear-gradient(to left, black var(--tw-mask-left-from), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "transparent " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    })`,
  );
export const mask_radial = (value: TemplateStringsArray) =>
  /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?(_-?(0|[1-9]\d*)\.(0|[1-9]\d*)?)?$/.test(
    value[0],
  )
    ? css`
        --tw-mask-radial-size: ${value[0].replace(/_/g, " ")};
      `
    : css`
        mask-image: radial-gradient(${value[0]});
      `;
export const mask_radial_from = (value: TemplateStringsArray) =>
  mask_radial([
    `var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "black " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }, transparent var(--tw-mask-radial-to)`,
  ] as any);
export const mask_radial_to = (value: TemplateStringsArray) =>
  mask_radial([
    `var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), black var(--tw-mask-radial-from), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "transparent " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    })`,
  ] as any);
const maskRadialShape = (value: string) => css`
  --tw-mask-radial-shape: ${value};
`;
export const mask_radial_circle = maskRadialShape("circle");
export const mask_radial_ellipse = maskRadialShape("ellipse");
export const mask_radial_closest_corner = maskRadialShape("closest-corner");
export const mask_radial_closest_side = maskRadialShape("closest-side");
export const mask_radial_farthest_corner = maskRadialShape("farthest-corner");
export const mask_radial_farthest_side = maskRadialShape("farthest-side");
const maskRadialPosition = (value: string) => css`
  --tw-mask-radial-position: ${value};
`;
export const mask_radial_at_top_left = maskRadialPosition("top left");
export const mask_radial_at_top = maskRadialPosition("top");
export const mask_radial_at_top_right = maskRadialPosition("top right");
export const mask_radial_at_left = maskRadialPosition("left");
export const mask_radial_at_center = maskRadialPosition("center");
export const mask_radial_at_right = maskRadialPosition("right");
export const mask_radial_at_bottom_left = maskRadialPosition("bottom left");
export const mask_radial_at_bottom = maskRadialPosition("bottom");
export const mask_radial_at_bottom_right = maskRadialPosition("bottom right");
export const mask_conic = (value: TemplateStringsArray) =>
  mask([
    `conic-gradient(from ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?$/.test(value[0])
        ? value[0] + "deg"
        : value[0]
    }, black var(--tw-mask-conic-from), transparent var(--tw-mask-conic-to))`,
  ] as any);
export const mask_conic_from = (value: TemplateStringsArray) =>
  mask([
    `conic-gradient(from var(--tw-mask-conic-position), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "black " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    }, transparent var(--tw-mask-conic-to))`,
  ] as any);
export const mask_conic_to = (value: TemplateStringsArray) =>
  mask([
    `conic-gradient(from var(--tw-mask-conic-position), black var(--tw-mask-conic-from), ${
      /^-?(0|[1-9]\d*)\.(0|[1-9]\d*)?%?$/.test(value[0])
        ? "transparent " +
          ((value[0].endsWith("%") && value[0]) ||
            "calc(var(--spacing) * " + value[0] + ")")
        : value[0]
    })`,
  ] as any);
