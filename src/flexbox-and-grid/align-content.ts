import { css } from "css-native";

const alignContent = (value: string) => css`
  align-content: ${value};
`;
export const content_normal = alignContent(`normal`);
export const content_center = alignContent(`center`);
export const content_start = alignContent(`flex-start`);
export const content_end = alignContent(`flex-end`);
export const content_between = alignContent(`space-between`);
export const content_around = alignContent(`space-around`);
export const content_evenly = alignContent(`space-evenly`);
export const content_baseline = alignContent(`baseline`);
export const content_stretch = alignContent(`stretch`);
