import { css } from "css-native";

const placeContent = (value: string) => css`
  place-content: ${value};
`;
export const place_content_center = placeContent(`center`);
export const place_content_center_safe = placeContent(`safe center`);
export const place_content_start = placeContent(`start`);
export const place_content_end = placeContent(`end`);
export const place_content_end_safe = placeContent(`safe end`);
export const place_content_between = placeContent(`space-between`);
export const place_content_around = placeContent(`space-around`);
export const place_content_evenly = placeContent(`space-evenly`);
export const place_content_baseline = placeContent(`baseline`);
export const place_content_stretch = placeContent(`stretch`);
