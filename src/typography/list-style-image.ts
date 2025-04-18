import { css } from "css-native";

export const list_image = (image: string) => css`
  list-style-image: ${image};
`;
export const list_image_none = list_image("none");
