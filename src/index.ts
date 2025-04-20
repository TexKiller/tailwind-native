// layout
export * from "./layout/aspect-ratio";
export * from "./layout/columns";
export * from "./layout/break-after";
export * from "./layout/break-before";
export * from "./layout/break-inside";
export * from "./layout/box-decoration-break";
export * from "./layout/box-sizing";
export * from "./layout/display";
export * from "./layout/float";
export * from "./layout/clear";
export * from "./layout/isolation";
export * from "./layout/object-fit";
export * from "./layout/object-position";
export * from "./layout/overflow";
export * from "./layout/overscroll-behavior";
export * from "./layout/position";
export * from "./layout/top-right-bottom-left";
export * from "./layout/visibility";
export * from "./layout/z-index";

// flexbox & grid
export * from "./flexbox-and-grid/flex-basis";
export * from "./flexbox-and-grid/flex-direction";
export * from "./flexbox-and-grid/flex-wrap";
export * from "./flexbox-and-grid/flex";
export * from "./flexbox-and-grid/flex-grow";
export * from "./flexbox-and-grid/flex-shrink";
export * from "./flexbox-and-grid/order";
export * from "./flexbox-and-grid/grid-template-columns";
export * from "./flexbox-and-grid/grid-column";
export * from "./flexbox-and-grid/grid-template-rows";
export * from "./flexbox-and-grid/grid-row";
export * from "./flexbox-and-grid/grid-auto-flow";
export * from "./flexbox-and-grid/grid-auto-columns";
export * from "./flexbox-and-grid/grid-auto-rows";
export * from "./flexbox-and-grid/gap";
export * from "./flexbox-and-grid/justify-content";
export * from "./flexbox-and-grid/justify-items";
export * from "./flexbox-and-grid/justify-self";
export * from "./flexbox-and-grid/align-content";
export * from "./flexbox-and-grid/align-items";
export * from "./flexbox-and-grid/align-self";
export * from "./flexbox-and-grid/place-content";
export * from "./flexbox-and-grid/place-items";
export * from "./flexbox-and-grid/place-self";

// spacing
export * from "./spacing/padding";
export * from "./spacing/margin";

// sizing
export * from "./sizing/width";
export * from "./sizing/min-width";
export * from "./sizing/max-width";
export * from "./sizing/height";
export * from "./sizing/min-height";
export * from "./sizing/max-height";

// typography
export * from "./typography/font-family";
export * from "./typography/font-size";
export * from "./typography/font-smoothing";
export * from "./typography/font-style";
export * from "./typography/font-weight";
export * from "./typography/font-stretch";
export * from "./typography/font-variant-numeric";
export * from "./typography/letter-spacing";
export * from "./typography/line-clamp";
export * from "./typography/line-height";
export * from "./typography/list-style-image";
export * from "./typography/list-style-position";
export * from "./typography/list-style-type";
export * from "./typography/text-align";
export * from "./typography/color";
export * from "./typography/text-decoration-line";
export * from "./typography/text-decoration-color";
export * from "./typography/text-decoration-style";
export * from "./typography/text-decoration-thickness";
export * from "./typography/text-underline-offset";
export * from "./typography/text-transform";
export * from "./typography/text-overflow";
export * from "./typography/text-wrap";
export * from "./typography/text-indent";
export * from "./typography/vertical-align";
export * from "./typography/white-space";
export * from "./typography/word-break";
export * from "./typography/overflow-wrap";
export * from "./typography/hyphens";
export * from "./typography/content";

import { text_size } from "./typography/font-size";
import { text_height } from "./typography/line-height";
export const text = (size: string, line_height?: string) =>
  line_height ? text_height(size, line_height) : text_size(size);

import { decoration_color } from "./typography/text-decoration-color";
import { decoration_thickness } from "./typography/text-decoration-thickness";
export const decoration = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?$/.test(value)
    ? decoration_thickness(value)
    : decoration_color(value);

// backgrounds
export * from "./backgrounds/background-attachment";
export * from "./backgrounds/background-clip";
export * from "./backgrounds/background-color";
export * from "./backgrounds/background-image";
export * from "./backgrounds/background-origin";
export * from "./backgrounds/background-position";
export * from "./backgrounds/background-repeat";
export * from "./backgrounds/background-size";

// borders
export * from "./borders/border-color";
export * from "./borders/border-style";
export * from "./borders/border-width";
export * from "./borders/border-radius";
export * from "./borders/outline-width";
export * from "./borders/outline-color";
export * from "./borders/outline-style";
export * from "./borders/outline-offset";

import { border_width } from "./borders/border-width";
import { border_color } from "./borders/border-color";
export const border = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?$/.test(value)
    ? border_width(value)
    : border_color(value);

import { outline_width } from "./borders/outline-width";
import { outline_color } from "./borders/outline-color";
export const outline = (value: string) =>
  /^-?(0|[1-9]\d*)(\.\d*)?$/.test(value)
    ? outline_width(value)
    : outline_color(value);

// effects
export * from "./effects/box-shadow";
export * from "./effects/text-shadow";
export * from "./effects/opacity";
export * from "./effects/mix-blend-mode";
export * from "./effects/background-blend-mode";
export * from "./effects/mask-clip";
export * from "./effects/mask-composite";
export * from "./effects/mask-image";
export * from "./effects/mask-mode";
export * from "./effects/mask-origin";
export * from "./effects/mask-position";
export * from "./effects/mask-repeat";
export * from "./effects/mask-size";
export * from "./effects/mask-type";
