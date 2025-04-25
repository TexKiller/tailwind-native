import { css } from "css-native";

export const list_image = (image: TemplateStringsArray) => css`
  list-style-image: ${image[0]};
`;
export const list_image_none = list_image`none`;
