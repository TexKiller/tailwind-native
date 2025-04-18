import { css } from "css-native";

const wordBreak = (word_break: string) => css`
  word-break: ${word_break};
`;
export const break_normal = wordBreak("normal");
export const break_all = wordBreak("break-all");
export const break_word = wordBreak("break-word");
