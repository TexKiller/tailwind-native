import { css } from "css-native";

const display = (value: string) => css`
  display: ${value};
`;
export const inline = display("inline");
export const block = display("block");
export const inline_block = display("inline-block");
export const flow_root = display("flow-root");
export const inline_flex = display("inline-flex");
export const grid = display("grid");
export const inline_grid = display("inline-grid");
export const contents = display("contents");
export const table = display("table");
export const inline_table = display("inline-table");
export const table_caption = display("table-caption");
export const table_cell = display("table-cell");
export const table_column = display("table-column");
export const table_column_group = display("table-column-group");
export const table_footer_group = display("table-footer-group");
export const table_header_group = display("table-header-group");
export const table_row_group = display("table-row-group");
export const table_row = display("table-row");
export const list_item = display("list-item");
export const hidden = display("hidden");
export const sr_only = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
export const not_sr_only = css`
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
`;
