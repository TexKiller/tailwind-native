import { css } from "css-native";

export const text_height = (size_lineheight: TemplateStringsArray) => css`
  font-size: ${size_lineheight[0].split(" ")[0]};
  line-height: ${size_lineheight[0].split(" ")[1]};
`;
export const leading_none = css`
  line-height: 1;
`;
export const leading = (line_height: TemplateStringsArray) => css`
  line-height: ${/^-?(0|[1-9]\d*)?(.\d*)?$/.test(line_height[0])
    ? `calc(var(--spacing) * ${line_height[0]})`
    : line_height[0]};
`;
