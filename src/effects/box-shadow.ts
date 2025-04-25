import { css } from "css-native";

export const shadow = (value: TemplateStringsArray) => css`
  box-shadow: ${value[0]};
`;
export const shadow_2xs = shadow`var(--shadow-2xs)`;
export const shadow_xs = shadow`var(--shadow-xs)`;
export const shadow_sm = shadow`var(--shadow-sm)`;
export const shadow_md = shadow`var(--shadow-md)`;
export const shadow_lg = shadow`var(--shadow-lg)`;
export const shadow_xl = shadow`var(--shadow-xl)`;
export const shadow_2xl = shadow`var(--shadow-2xl)`;
export const shadow_none = shadow`0 0 #0000`;
export const shadow_color = (value: TemplateStringsArray) => css`
  --tw-shadow-color: ${value[0]};
`;
export const shadow_inherit = shadow_color`inherit`;
export const shadow_current = shadow_color`currentColor`;
export const shadow_transparent = shadow_color`transparent`;
export const shadow_black = shadow_color`var(--color-black)`;
export const shadow_white = shadow_color`var(--color-white)`;
export const shadow_red_50 = shadow_color`var(--color-red-50)`;
export const shadow_red_100 = shadow_color`var(--color-red-100)`;
export const shadow_red_200 = shadow_color`var(--color-red-200)`;
export const shadow_red_300 = shadow_color`var(--color-red-300)`;
export const shadow_red_400 = shadow_color`var(--color-red-400)`;
export const shadow_red_500 = shadow_color`var(--color-red-500)`;
export const shadow_red_600 = shadow_color`var(--color-red-600)`;
export const shadow_red_700 = shadow_color`var(--color-red-700)`;
export const shadow_red_800 = shadow_color`var(--color-red-800)`;
export const shadow_red_900 = shadow_color`var(--color-red-900)`;
export const shadow_red_950 = shadow_color`var(--color-red-950)`;
export const shadow_orange_50 = shadow_color`var(--color-orange-50)`;
export const shadow_orange_100 = shadow_color`var(--color-orange-100)`;
export const shadow_orange_200 = shadow_color`var(--color-orange-200)`;
export const shadow_orange_300 = shadow_color`var(--color-orange-300)`;
export const shadow_orange_400 = shadow_color`var(--color-orange-400)`;
export const shadow_orange_500 = shadow_color`var(--color-orange-500)`;
export const shadow_orange_600 = shadow_color`var(--color-orange-600)`;
export const shadow_orange_700 = shadow_color`var(--color-orange-700)`;
export const shadow_orange_800 = shadow_color`var(--color-orange-800)`;
export const shadow_orange_900 = shadow_color`var(--color-orange-900)`;
export const shadow_orange_950 = shadow_color`var(--color-orange-950)`;
export const shadow_amber_50 = shadow_color`var(--color-amber-50)`;
export const shadow_amber_100 = shadow_color`var(--color-amber-100)`;
export const shadow_amber_200 = shadow_color`var(--color-amber-200)`;
export const shadow_amber_300 = shadow_color`var(--color-amber-300)`;
export const shadow_amber_400 = shadow_color`var(--color-amber-400)`;
export const shadow_amber_500 = shadow_color`var(--color-amber-500)`;
export const shadow_amber_600 = shadow_color`var(--color-amber-600)`;
export const shadow_amber_700 = shadow_color`var(--color-amber-700)`;
export const shadow_amber_800 = shadow_color`var(--color-amber-800)`;
export const shadow_amber_900 = shadow_color`var(--color-amber-900)`;
export const shadow_amber_950 = shadow_color`var(--color-amber-950)`;
export const shadow_yellow_50 = shadow_color`var(--color-yellow-50)`;
export const shadow_yellow_100 = shadow_color`var(--color-yellow-100)`;
export const shadow_yellow_200 = shadow_color`var(--color-yellow-200)`;
export const shadow_yellow_300 = shadow_color`var(--color-yellow-300)`;
export const shadow_yellow_400 = shadow_color`var(--color-yellow-400)`;
export const shadow_yellow_500 = shadow_color`var(--color-yellow-500)`;
export const shadow_yellow_600 = shadow_color`var(--color-yellow-600)`;
export const shadow_yellow_700 = shadow_color`var(--color-yellow-700)`;
export const shadow_yellow_800 = shadow_color`var(--color-yellow-800)`;
export const shadow_yellow_900 = shadow_color`var(--color-yellow-900)`;
export const shadow_yellow_950 = shadow_color`var(--color-yellow-950)`;
export const shadow_lime_50 = shadow_color`var(--color-lime-50)`;
export const shadow_lime_100 = shadow_color`var(--color-lime-100)`;
export const shadow_lime_200 = shadow_color`var(--color-lime-200)`;
export const shadow_lime_300 = shadow_color`var(--color-lime-300)`;
export const shadow_lime_400 = shadow_color`var(--color-lime-400)`;
export const shadow_lime_500 = shadow_color`var(--color-lime-500)`;
export const shadow_lime_600 = shadow_color`var(--color-lime-600)`;
export const shadow_lime_700 = shadow_color`var(--color-lime-700)`;
export const shadow_lime_800 = shadow_color`var(--color-lime-800)`;
export const shadow_lime_900 = shadow_color`var(--color-lime-900)`;
export const shadow_lime_950 = shadow_color`var(--color-lime-950)`;
export const shadow_green_50 = shadow_color`var(--color-green-50)`;
export const shadow_green_100 = shadow_color`var(--color-green-100)`;
export const shadow_green_200 = shadow_color`var(--color-green-200)`;
export const shadow_green_300 = shadow_color`var(--color-green-300)`;
export const shadow_green_400 = shadow_color`var(--color-green-400)`;
export const shadow_green_500 = shadow_color`var(--color-green-500)`;
export const shadow_green_600 = shadow_color`var(--color-green-600)`;
export const shadow_green_700 = shadow_color`var(--color-green-700)`;
export const shadow_green_800 = shadow_color`var(--color-green-800)`;
export const shadow_green_900 = shadow_color`var(--color-green-900)`;
export const shadow_green_950 = shadow_color`var(--color-green-950)`;
export const shadow_emerald_50 = shadow_color`var(--color-emerald-50)`;
export const shadow_emerald_100 = shadow_color`var(--color-emerald-100)`;
export const shadow_emerald_200 = shadow_color`var(--color-emerald-200)`;
export const shadow_emerald_300 = shadow_color`var(--color-emerald-300)`;
export const shadow_emerald_400 = shadow_color`var(--color-emerald-400)`;
export const shadow_emerald_500 = shadow_color`var(--color-emerald-500)`;
export const shadow_emerald_600 = shadow_color`var(--color-emerald-600)`;
export const shadow_emerald_700 = shadow_color`var(--color-emerald-700)`;
export const shadow_emerald_800 = shadow_color`var(--color-emerald-800)`;
export const shadow_emerald_900 = shadow_color`var(--color-emerald-900)`;
export const shadow_emerald_950 = shadow_color`var(--color-emerald-950)`;
export const shadow_teal_50 = shadow_color`var(--color-teal-50)`;
export const shadow_teal_100 = shadow_color`var(--color-teal-100)`;
export const shadow_teal_200 = shadow_color`var(--color-teal-200)`;
export const shadow_teal_300 = shadow_color`var(--color-teal-300)`;
export const shadow_teal_400 = shadow_color`var(--color-teal-400)`;
export const shadow_teal_500 = shadow_color`var(--color-teal-500)`;
export const shadow_teal_600 = shadow_color`var(--color-teal-600)`;
export const shadow_teal_700 = shadow_color`var(--color-teal-700)`;
export const shadow_teal_800 = shadow_color`var(--color-teal-800)`;
export const shadow_teal_900 = shadow_color`var(--color-teal-900)`;
export const shadow_teal_950 = shadow_color`var(--color-teal-950)`;
export const shadow_cyan_50 = shadow_color`var(--color-cyan-50)`;
export const shadow_cyan_100 = shadow_color`var(--color-cyan-100)`;
export const shadow_cyan_200 = shadow_color`var(--color-cyan-200)`;
export const shadow_cyan_300 = shadow_color`var(--color-cyan-300)`;
export const shadow_cyan_400 = shadow_color`var(--color-cyan-400)`;
export const shadow_cyan_500 = shadow_color`var(--color-cyan-500)`;
export const shadow_cyan_600 = shadow_color`var(--color-cyan-600)`;
export const shadow_cyan_700 = shadow_color`var(--color-cyan-700)`;
export const shadow_cyan_800 = shadow_color`var(--color-cyan-800)`;
export const shadow_cyan_900 = shadow_color`var(--color-cyan-900)`;
export const shadow_cyan_950 = shadow_color`var(--color-cyan-950)`;
export const shadow_sky_50 = shadow_color`var(--color-sky-50)`;
export const shadow_sky_100 = shadow_color`var(--color-sky-100)`;
export const shadow_sky_200 = shadow_color`var(--color-sky-200)`;
export const shadow_sky_300 = shadow_color`var(--color-sky-300)`;
export const shadow_sky_400 = shadow_color`var(--color-sky-400)`;
export const shadow_sky_500 = shadow_color`var(--color-sky-500)`;
export const shadow_sky_600 = shadow_color`var(--color-sky-600)`;
export const shadow_sky_700 = shadow_color`var(--color-sky-700)`;
export const shadow_sky_800 = shadow_color`var(--color-sky-800)`;
export const shadow_sky_900 = shadow_color`var(--color-sky-900)`;
export const shadow_sky_950 = shadow_color`var(--color-sky-950)`;
export const shadow_blue_50 = shadow_color`var(--color-blue-50)`;
export const shadow_blue_100 = shadow_color`var(--color-blue-100)`;
export const shadow_blue_200 = shadow_color`var(--color-blue-200)`;
export const shadow_blue_300 = shadow_color`var(--color-blue-300)`;
export const shadow_blue_400 = shadow_color`var(--color-blue-400)`;
export const shadow_blue_500 = shadow_color`var(--color-blue-500)`;
export const shadow_blue_600 = shadow_color`var(--color-blue-600)`;
export const shadow_blue_700 = shadow_color`var(--color-blue-700)`;
export const shadow_blue_800 = shadow_color`var(--color-blue-800)`;
export const shadow_blue_900 = shadow_color`var(--color-blue-900)`;
export const shadow_blue_950 = shadow_color`var(--color-blue-950)`;
export const shadow_indigo_50 = shadow_color`var(--color-indigo-50)`;
export const shadow_indigo_100 = shadow_color`var(--color-indigo-100)`;
export const shadow_indigo_200 = shadow_color`var(--color-indigo-200)`;
export const shadow_indigo_300 = shadow_color`var(--color-indigo-300)`;
export const shadow_indigo_400 = shadow_color`var(--color-indigo-400)`;
export const shadow_indigo_500 = shadow_color`var(--color-indigo-500)`;
export const shadow_indigo_600 = shadow_color`var(--color-indigo-600)`;
export const shadow_indigo_700 = shadow_color`var(--color-indigo-700)`;
export const shadow_indigo_800 = shadow_color`var(--color-indigo-800)`;
export const shadow_indigo_900 = shadow_color`var(--color-indigo-900)`;
export const shadow_indigo_950 = shadow_color`var(--color-indigo-950)`;
export const shadow_violet_50 = shadow_color`var(--color-violet-50)`;
export const shadow_violet_100 = shadow_color`var(--color-violet-100)`;
export const shadow_violet_200 = shadow_color`var(--color-violet-200)`;
export const shadow_violet_300 = shadow_color`var(--color-violet-300)`;
export const shadow_violet_400 = shadow_color`var(--color-violet-400)`;
export const shadow_violet_500 = shadow_color`var(--color-violet-500)`;
export const shadow_violet_600 = shadow_color`var(--color-violet-600)`;
export const shadow_violet_700 = shadow_color`var(--color-violet-700)`;
export const shadow_violet_800 = shadow_color`var(--color-violet-800)`;
export const shadow_violet_900 = shadow_color`var(--color-violet-900)`;
export const shadow_violet_950 = shadow_color`var(--color-violet-950)`;
export const shadow_purple_50 = shadow_color`var(--color-purple-50)`;
export const shadow_purple_100 = shadow_color`var(--color-purple-100)`;
export const shadow_purple_200 = shadow_color`var(--color-purple-200)`;
export const shadow_purple_300 = shadow_color`var(--color-purple-300)`;
export const shadow_purple_400 = shadow_color`var(--color-purple-400)`;
export const shadow_purple_500 = shadow_color`var(--color-purple-500)`;
export const shadow_purple_600 = shadow_color`var(--color-purple-600)`;
export const shadow_purple_700 = shadow_color`var(--color-purple-700)`;
export const shadow_purple_800 = shadow_color`var(--color-purple-800)`;
export const shadow_purple_900 = shadow_color`var(--color-purple-900)`;
export const shadow_purple_950 = shadow_color`var(--color-purple-950)`;
export const shadow_fuchsia_50 = shadow_color`var(--color-fuchsia-50)`;
export const shadow_fuchsia_100 = shadow_color`var(--color-fuchsia-100)`;
export const shadow_fuchsia_200 = shadow_color`var(--color-fuchsia-200)`;
export const shadow_fuchsia_300 = shadow_color`var(--color-fuchsia-300)`;
export const shadow_fuchsia_400 = shadow_color`var(--color-fuchsia-400)`;
export const shadow_fuchsia_500 = shadow_color`var(--color-fuchsia-500)`;
export const shadow_fuchsia_600 = shadow_color`var(--color-fuchsia-600)`;
export const shadow_fuchsia_700 = shadow_color`var(--color-fuchsia-700)`;
export const shadow_fuchsia_800 = shadow_color`var(--color-fuchsia-800)`;
export const shadow_fuchsia_900 = shadow_color`var(--color-fuchsia-900)`;
export const shadow_fuchsia_950 = shadow_color`var(--color-fuchsia-950)`;
export const shadow_pink_50 = shadow_color`var(--color-pink-50)`;
export const shadow_pink_100 = shadow_color`var(--color-pink-100)`;
export const shadow_pink_200 = shadow_color`var(--color-pink-200)`;
export const shadow_pink_300 = shadow_color`var(--color-pink-300)`;
export const shadow_pink_400 = shadow_color`var(--color-pink-400)`;
export const shadow_pink_500 = shadow_color`var(--color-pink-500)`;
export const shadow_pink_600 = shadow_color`var(--color-pink-600)`;
export const shadow_pink_700 = shadow_color`var(--color-pink-700)`;
export const shadow_pink_800 = shadow_color`var(--color-pink-800)`;
export const shadow_pink_900 = shadow_color`var(--color-pink-900)`;
export const shadow_pink_950 = shadow_color`var(--color-pink-950)`;
export const shadow_rose_50 = shadow_color`var(--color-rose-50)`;
export const shadow_rose_100 = shadow_color`var(--color-rose-100)`;
export const shadow_rose_200 = shadow_color`var(--color-rose-200)`;
export const shadow_rose_300 = shadow_color`var(--color-rose-300)`;
export const shadow_rose_400 = shadow_color`var(--color-rose-400)`;
export const shadow_rose_500 = shadow_color`var(--color-rose-500)`;
export const shadow_rose_600 = shadow_color`var(--color-rose-600)`;
export const shadow_rose_700 = shadow_color`var(--color-rose-700)`;
export const shadow_rose_800 = shadow_color`var(--color-rose-800)`;
export const shadow_rose_900 = shadow_color`var(--color-rose-900)`;
export const shadow_rose_950 = shadow_color`var(--color-rose-950)`;
export const shadow_slate_50 = shadow_color`var(--color-slate-50)`;
export const shadow_slate_100 = shadow_color`var(--color-slate-100)`;
export const shadow_slate_200 = shadow_color`var(--color-slate-200)`;
export const shadow_slate_300 = shadow_color`var(--color-slate-300)`;
export const shadow_slate_400 = shadow_color`var(--color-slate-400)`;
export const shadow_slate_500 = shadow_color`var(--color-slate-500)`;
export const shadow_slate_600 = shadow_color`var(--color-slate-600)`;
export const shadow_slate_700 = shadow_color`var(--color-slate-700)`;
export const shadow_slate_800 = shadow_color`var(--color-slate-800)`;
export const shadow_slate_900 = shadow_color`var(--color-slate-900)`;
export const shadow_slate_950 = shadow_color`var(--color-slate-950)`;
export const shadow_gray_50 = shadow_color`var(--color-gray-50)`;
export const shadow_gray_100 = shadow_color`var(--color-gray-100)`;
export const shadow_gray_200 = shadow_color`var(--color-gray-200)`;
export const shadow_gray_300 = shadow_color`var(--color-gray-300)`;
export const shadow_gray_400 = shadow_color`var(--color-gray-400)`;
export const shadow_gray_500 = shadow_color`var(--color-gray-500)`;
export const shadow_gray_600 = shadow_color`var(--color-gray-600)`;
export const shadow_gray_700 = shadow_color`var(--color-gray-700)`;
export const shadow_gray_800 = shadow_color`var(--color-gray-800)`;
export const shadow_gray_900 = shadow_color`var(--color-gray-900)`;
export const shadow_gray_950 = shadow_color`var(--color-gray-950)`;
export const shadow_zinc_50 = shadow_color`var(--color-zinc-50)`;
export const shadow_zinc_100 = shadow_color`var(--color-zinc-100)`;
export const shadow_zinc_200 = shadow_color`var(--color-zinc-200)`;
export const shadow_zinc_300 = shadow_color`var(--color-zinc-300)`;
export const shadow_zinc_400 = shadow_color`var(--color-zinc-400)`;
export const shadow_zinc_500 = shadow_color`var(--color-zinc-500)`;
export const shadow_zinc_600 = shadow_color`var(--color-zinc-600)`;
export const shadow_zinc_700 = shadow_color`var(--color-zinc-700)`;
export const shadow_zinc_800 = shadow_color`var(--color-zinc-800)`;
export const shadow_zinc_900 = shadow_color`var(--color-zinc-900)`;
export const shadow_zinc_950 = shadow_color`var(--color-zinc-950)`;
export const shadow_neutral_50 = shadow_color`var(--color-neutral-50)`;
export const shadow_neutral_100 = shadow_color`var(--color-neutral-100)`;
export const shadow_neutral_200 = shadow_color`var(--color-neutral-200)`;
export const shadow_neutral_300 = shadow_color`var(--color-neutral-300)`;
export const shadow_neutral_400 = shadow_color`var(--color-neutral-400)`;
export const shadow_neutral_500 = shadow_color`var(--color-neutral-500)`;
export const shadow_neutral_600 = shadow_color`var(--color-neutral-600)`;
export const shadow_neutral_700 = shadow_color`var(--color-neutral-700)`;
export const shadow_neutral_800 = shadow_color`var(--color-neutral-800)`;
export const shadow_neutral_900 = shadow_color`var(--color-neutral-900)`;
export const shadow_neutral_950 = shadow_color`var(--color-neutral-950)`;
export const shadow_stone_50 = shadow_color`var(--color-stone-50)`;
export const shadow_stone_100 = shadow_color`var(--color-stone-100)`;
export const shadow_stone_200 = shadow_color`var(--color-stone-200)`;
export const shadow_stone_300 = shadow_color`var(--color-stone-300)`;
export const shadow_stone_400 = shadow_color`var(--color-stone-400)`;
export const shadow_stone_500 = shadow_color`var(--color-stone-500)`;
export const shadow_stone_600 = shadow_color`var(--color-stone-600)`;
export const shadow_stone_700 = shadow_color`var(--color-stone-700)`;
export const shadow_stone_800 = shadow_color`var(--color-stone-800)`;
export const shadow_stone_900 = shadow_color`var(--color-stone-900)`;
export const shadow_stone_950 = shadow_color`var(--color-stone-950)`;
export const inset_shadow = shadow;
export const inset_shadow_2xs = inset_shadow`var(--inset-shadow-2xs)`;
export const inset_shadow_xs = inset_shadow`var(--inset-shadow-xs)`;
export const inset_shadow_sm = inset_shadow`var(--inset-shadow-sm)`;
export const inset_shadow_none = inset_shadow`inset 0 0 #0000`;
const insetShadowColor = (value: string) => css`
  --tw-inset-shadow-color: ${value};
`;
export const inset_shadow_inherit = insetShadowColor("inherit");
export const inset_shadow_current = insetShadowColor("currentColor");
export const inset_shadow_transparent = insetShadowColor("transparent");
export const inset_shadow_black = insetShadowColor("var(--color-black)");
export const inset_shadow_white = insetShadowColor("var(--color-white)");
export const inset_shadow_red_50 = insetShadowColor("var(--color-red-50)");
export const inset_shadow_red_100 = insetShadowColor("var(--color-red-100)");
export const inset_shadow_red_200 = insetShadowColor("var(--color-red-200)");
export const inset_shadow_red_300 = insetShadowColor("var(--color-red-300)");
export const inset_shadow_red_400 = insetShadowColor("var(--color-red-400)");
export const inset_shadow_red_500 = insetShadowColor("var(--color-red-500)");
export const inset_shadow_red_600 = insetShadowColor("var(--color-red-600)");
export const inset_shadow_red_700 = insetShadowColor("var(--color-red-700)");
export const inset_shadow_red_800 = insetShadowColor("var(--color-red-800)");
export const inset_shadow_red_900 = insetShadowColor("var(--color-red-900)");
export const inset_shadow_red_950 = insetShadowColor("var(--color-red-950)");
export const inset_shadow_orange_50 = insetShadowColor(
  "var(--color-orange-50)",
);
export const inset_shadow_orange_100 = insetShadowColor(
  "var(--color-orange-100)",
);
export const inset_shadow_orange_200 = insetShadowColor(
  "var(--color-orange-200)",
);
export const inset_shadow_orange_300 = insetShadowColor(
  "var(--color-orange-300)",
);
export const inset_shadow_orange_400 = insetShadowColor(
  "var(--color-orange-400)",
);
export const inset_shadow_orange_500 = insetShadowColor(
  "var(--color-orange-500)",
);
export const inset_shadow_orange_600 = insetShadowColor(
  "var(--color-orange-600)",
);
export const inset_shadow_orange_700 = insetShadowColor(
  "var(--color-orange-700)",
);
export const inset_shadow_orange_800 = insetShadowColor(
  "var(--color-orange-800)",
);
export const inset_shadow_orange_900 = insetShadowColor(
  "var(--color-orange-900)",
);
export const inset_shadow_orange_950 = insetShadowColor(
  "var(--color-orange-950)",
);
export const inset_shadow_amber_50 = insetShadowColor("var(--color-amber-50)");
export const inset_shadow_amber_100 = insetShadowColor(
  "var(--color-amber-100)",
);
export const inset_shadow_amber_200 = insetShadowColor(
  "var(--color-amber-200)",
);
export const inset_shadow_amber_300 = insetShadowColor(
  "var(--color-amber-300)",
);
export const inset_shadow_amber_400 = insetShadowColor(
  "var(--color-amber-400)",
);
export const inset_shadow_amber_500 = insetShadowColor(
  "var(--color-amber-500)",
);
export const inset_shadow_amber_600 = insetShadowColor(
  "var(--color-amber-600)",
);
export const inset_shadow_amber_700 = insetShadowColor(
  "var(--color-amber-700)",
);
export const inset_shadow_amber_800 = insetShadowColor(
  "var(--color-amber-800)",
);
export const inset_shadow_amber_900 = insetShadowColor(
  "var(--color-amber-900)",
);
export const inset_shadow_amber_950 = insetShadowColor(
  "var(--color-amber-950)",
);
export const inset_shadow_yellow_50 = insetShadowColor(
  "var(--color-yellow-50)",
);
export const inset_shadow_yellow_100 = insetShadowColor(
  "var(--color-yellow-100)",
);
export const inset_shadow_yellow_200 = insetShadowColor(
  "var(--color-yellow-200)",
);
export const inset_shadow_yellow_300 = insetShadowColor(
  "var(--color-yellow-300)",
);
export const inset_shadow_yellow_400 = insetShadowColor(
  "var(--color-yellow-400)",
);
export const inset_shadow_yellow_500 = insetShadowColor(
  "var(--color-yellow-500)",
);
export const inset_shadow_yellow_600 = insetShadowColor(
  "var(--color-yellow-600)",
);
export const inset_shadow_yellow_700 = insetShadowColor(
  "var(--color-yellow-700)",
);
export const inset_shadow_yellow_800 = insetShadowColor(
  "var(--color-yellow-800)",
);
export const inset_shadow_yellow_900 = insetShadowColor(
  "var(--color-yellow-900)",
);
export const inset_shadow_yellow_950 = insetShadowColor(
  "var(--color-yellow-950)",
);
export const inset_shadow_lime_50 = insetShadowColor("var(--color-lime-50)");
export const inset_shadow_lime_100 = insetShadowColor("var(--color-lime-100)");
export const inset_shadow_lime_200 = insetShadowColor("var(--color-lime-200)");
export const inset_shadow_lime_300 = insetShadowColor("var(--color-lime-300)");
export const inset_shadow_lime_400 = insetShadowColor("var(--color-lime-400)");
export const inset_shadow_lime_500 = insetShadowColor("var(--color-lime-500)");
export const inset_shadow_lime_600 = insetShadowColor("var(--color-lime-600)");
export const inset_shadow_lime_700 = insetShadowColor("var(--color-lime-700)");
export const inset_shadow_lime_800 = insetShadowColor("var(--color-lime-800)");
export const inset_shadow_lime_900 = insetShadowColor("var(--color-lime-900)");
export const inset_shadow_lime_950 = insetShadowColor("var(--color-lime-950)");
export const inset_shadow_green_50 = insetShadowColor("var(--color-green-50)");
export const inset_shadow_green_100 = insetShadowColor(
  "var(--color-green-100)",
);
export const inset_shadow_green_200 = insetShadowColor(
  "var(--color-green-200)",
);
export const inset_shadow_green_300 = insetShadowColor(
  "var(--color-green-300)",
);
export const inset_shadow_green_400 = insetShadowColor(
  "var(--color-green-400)",
);
export const inset_shadow_green_500 = insetShadowColor(
  "var(--color-green-500)",
);
export const inset_shadow_green_600 = insetShadowColor(
  "var(--color-green-600)",
);
export const inset_shadow_green_700 = insetShadowColor(
  "var(--color-green-700)",
);
export const inset_shadow_green_800 = insetShadowColor(
  "var(--color-green-800)",
);
export const inset_shadow_green_900 = insetShadowColor(
  "var(--color-green-900)",
);
export const inset_shadow_green_950 = insetShadowColor(
  "var(--color-green-950)",
);
export const inset_shadow_emerald_50 = insetShadowColor(
  "var(--color-emerald-50)",
);
export const inset_shadow_emerald_100 = insetShadowColor(
  "var(--color-emerald-100)",
);
export const inset_shadow_emerald_200 = insetShadowColor(
  "var(--color-emerald-200)",
);
export const inset_shadow_emerald_300 = insetShadowColor(
  "var(--color-emerald-300)",
);
export const inset_shadow_emerald_400 = insetShadowColor(
  "var(--color-emerald-400)",
);
export const inset_shadow_emerald_500 = insetShadowColor(
  "var(--color-emerald-500)",
);
export const inset_shadow_emerald_600 = insetShadowColor(
  "var(--color-emerald-600)",
);
export const inset_shadow_emerald_700 = insetShadowColor(
  "var(--color-emerald-700)",
);
export const inset_shadow_emerald_800 = insetShadowColor(
  "var(--color-emerald-800)",
);
export const inset_shadow_emerald_900 = insetShadowColor(
  "var(--color-emerald-900)",
);
export const inset_shadow_emerald_950 = insetShadowColor(
  "var(--color-emerald-950)",
);
export const inset_shadow_teal_50 = insetShadowColor("var(--color-teal-50)");
export const inset_shadow_teal_100 = insetShadowColor("var(--color-teal-100)");
export const inset_shadow_teal_200 = insetShadowColor("var(--color-teal-200)");
export const inset_shadow_teal_300 = insetShadowColor("var(--color-teal-300)");
export const inset_shadow_teal_400 = insetShadowColor("var(--color-teal-400)");
export const inset_shadow_teal_500 = insetShadowColor("var(--color-teal-500)");
export const inset_shadow_teal_600 = insetShadowColor("var(--color-teal-600)");
export const inset_shadow_teal_700 = insetShadowColor("var(--color-teal-700)");
export const inset_shadow_teal_800 = insetShadowColor("var(--color-teal-800)");
export const inset_shadow_teal_900 = insetShadowColor("var(--color-teal-900)");
export const inset_shadow_teal_950 = insetShadowColor("var(--color-teal-950)");
export const inset_shadow_cyan_50 = insetShadowColor("var(--color-cyan-50)");
export const inset_shadow_cyan_100 = insetShadowColor("var(--color-cyan-100)");
export const inset_shadow_cyan_200 = insetShadowColor("var(--color-cyan-200)");
export const inset_shadow_cyan_300 = insetShadowColor("var(--color-cyan-300)");
export const inset_shadow_cyan_400 = insetShadowColor("var(--color-cyan-400)");
export const inset_shadow_cyan_500 = insetShadowColor("var(--color-cyan-500)");
export const inset_shadow_cyan_600 = insetShadowColor("var(--color-cyan-600)");
export const inset_shadow_cyan_700 = insetShadowColor("var(--color-cyan-700)");
export const inset_shadow_cyan_800 = insetShadowColor("var(--color-cyan-800)");
export const inset_shadow_cyan_900 = insetShadowColor("var(--color-cyan-900)");
export const inset_shadow_cyan_950 = insetShadowColor("var(--color-cyan-950)");
export const inset_shadow_sky_50 = insetShadowColor("var(--color-sky-50)");
export const inset_shadow_sky_100 = insetShadowColor("var(--color-sky-100)");
export const inset_shadow_sky_200 = insetShadowColor("var(--color-sky-200)");
export const inset_shadow_sky_300 = insetShadowColor("var(--color-sky-300)");
export const inset_shadow_sky_400 = insetShadowColor("var(--color-sky-400)");
export const inset_shadow_sky_500 = insetShadowColor("var(--color-sky-500)");
export const inset_shadow_sky_600 = insetShadowColor("var(--color-sky-600)");
export const inset_shadow_sky_700 = insetShadowColor("var(--color-sky-700)");
export const inset_shadow_sky_800 = insetShadowColor("var(--color-sky-800)");
export const inset_shadow_sky_900 = insetShadowColor("var(--color-sky-900)");
export const inset_shadow_sky_950 = insetShadowColor("var(--color-sky-950)");
export const inset_shadow_blue_50 = insetShadowColor("var(--color-blue-50)");
export const inset_shadow_blue_100 = insetShadowColor("var(--color-blue-100)");
export const inset_shadow_blue_200 = insetShadowColor("var(--color-blue-200)");
export const inset_shadow_blue_300 = insetShadowColor("var(--color-blue-300)");
export const inset_shadow_blue_400 = insetShadowColor("var(--color-blue-400)");
export const inset_shadow_blue_500 = insetShadowColor("var(--color-blue-500)");
export const inset_shadow_blue_600 = insetShadowColor("var(--color-blue-600)");
export const inset_shadow_blue_700 = insetShadowColor("var(--color-blue-700)");
export const inset_shadow_blue_800 = insetShadowColor("var(--color-blue-800)");
export const inset_shadow_blue_900 = insetShadowColor("var(--color-blue-900)");
export const inset_shadow_blue_950 = insetShadowColor("var(--color-blue-950)");
export const inset_shadow_indigo_50 = insetShadowColor(
  "var(--color-indigo-50)",
);
export const inset_shadow_indigo_100 = insetShadowColor(
  "var(--color-indigo-100)",
);
export const inset_shadow_indigo_200 = insetShadowColor(
  "var(--color-indigo-200)",
);
export const inset_shadow_indigo_300 = insetShadowColor(
  "var(--color-indigo-300)",
);
export const inset_shadow_indigo_400 = insetShadowColor(
  "var(--color-indigo-400)",
);
export const inset_shadow_indigo_500 = insetShadowColor(
  "var(--color-indigo-500)",
);
export const inset_shadow_indigo_600 = insetShadowColor(
  "var(--color-indigo-600)",
);
export const inset_shadow_indigo_700 = insetShadowColor(
  "var(--color-indigo-700)",
);
export const inset_shadow_indigo_800 = insetShadowColor(
  "var(--color-indigo-800)",
);
export const inset_shadow_indigo_900 = insetShadowColor(
  "var(--color-indigo-900)",
);
export const inset_shadow_indigo_950 = insetShadowColor(
  "var(--color-indigo-950)",
);
export const inset_shadow_violet_50 = insetShadowColor(
  "var(--color-violet-50)",
);
export const inset_shadow_violet_100 = insetShadowColor(
  "var(--color-violet-100)",
);
export const inset_shadow_violet_200 = insetShadowColor(
  "var(--color-violet-200)",
);
export const inset_shadow_violet_300 = insetShadowColor(
  "var(--color-violet-300)",
);
export const inset_shadow_violet_400 = insetShadowColor(
  "var(--color-violet-400)",
);
export const inset_shadow_violet_500 = insetShadowColor(
  "var(--color-violet-500)",
);
export const inset_shadow_violet_600 = insetShadowColor(
  "var(--color-violet-600)",
);
export const inset_shadow_violet_700 = insetShadowColor(
  "var(--color-violet-700)",
);
export const inset_shadow_violet_800 = insetShadowColor(
  "var(--color-violet-800)",
);
export const inset_shadow_violet_900 = insetShadowColor(
  "var(--color-violet-900)",
);
export const inset_shadow_violet_950 = insetShadowColor(
  "var(--color-violet-950)",
);
export const inset_shadow_purple_50 = insetShadowColor(
  "var(--color-purple-50)",
);
export const inset_shadow_purple_100 = insetShadowColor(
  "var(--color-purple-100)",
);
export const inset_shadow_purple_200 = insetShadowColor(
  "var(--color-purple-200)",
);
export const inset_shadow_purple_300 = insetShadowColor(
  "var(--color-purple-300)",
);
export const inset_shadow_purple_400 = insetShadowColor(
  "var(--color-purple-400)",
);
export const inset_shadow_purple_500 = insetShadowColor(
  "var(--color-purple-500)",
);
export const inset_shadow_purple_600 = insetShadowColor(
  "var(--color-purple-600)",
);
export const inset_shadow_purple_700 = insetShadowColor(
  "var(--color-purple-700)",
);
export const inset_shadow_purple_800 = insetShadowColor(
  "var(--color-purple-800)",
);
export const inset_shadow_purple_900 = insetShadowColor(
  "var(--color-purple-900)",
);
export const inset_shadow_purple_950 = insetShadowColor(
  "var(--color-purple-950)",
);
export const inset_shadow_fuchsia_50 = insetShadowColor(
  "var(--color-fuchsia-50)",
);
export const inset_shadow_fuchsia_100 = insetShadowColor(
  "var(--color-fuchsia-100)",
);
export const inset_shadow_fuchsia_200 = insetShadowColor(
  "var(--color-fuchsia-200)",
);
export const inset_shadow_fuchsia_300 = insetShadowColor(
  "var(--color-fuchsia-300)",
);
export const inset_shadow_fuchsia_400 = insetShadowColor(
  "var(--color-fuchsia-400)",
);
export const inset_shadow_fuchsia_500 = insetShadowColor(
  "var(--color-fuchsia-500)",
);
export const inset_shadow_fuchsia_600 = insetShadowColor(
  "var(--color-fuchsia-600)",
);
export const inset_shadow_fuchsia_700 = insetShadowColor(
  "var(--color-fuchsia-700)",
);
export const inset_shadow_fuchsia_800 = insetShadowColor(
  "var(--color-fuchsia-800)",
);
export const inset_shadow_fuchsia_900 = insetShadowColor(
  "var(--color-fuchsia-900)",
);
export const inset_shadow_fuchsia_950 = insetShadowColor(
  "var(--color-fuchsia-950)",
);
export const inset_shadow_pink_50 = insetShadowColor("var(--color-pink-50)");
export const inset_shadow_pink_100 = insetShadowColor("var(--color-pink-100)");
export const inset_shadow_pink_200 = insetShadowColor("var(--color-pink-200)");
export const inset_shadow_pink_300 = insetShadowColor("var(--color-pink-300)");
export const inset_shadow_pink_400 = insetShadowColor("var(--color-pink-400)");
export const inset_shadow_pink_500 = insetShadowColor("var(--color-pink-500)");
export const inset_shadow_pink_600 = insetShadowColor("var(--color-pink-600)");
export const inset_shadow_pink_700 = insetShadowColor("var(--color-pink-700)");
export const inset_shadow_pink_800 = insetShadowColor("var(--color-pink-800)");
export const inset_shadow_pink_900 = insetShadowColor("var(--color-pink-900)");
export const inset_shadow_pink_950 = insetShadowColor("var(--color-pink-950)");
export const inset_shadow_rose_50 = insetShadowColor("var(--color-rose-50)");
export const inset_shadow_rose_100 = insetShadowColor("var(--color-rose-100)");
export const inset_shadow_rose_200 = insetShadowColor("var(--color-rose-200)");
export const inset_shadow_rose_300 = insetShadowColor("var(--color-rose-300)");
export const inset_shadow_rose_400 = insetShadowColor("var(--color-rose-400)");
export const inset_shadow_rose_500 = insetShadowColor("var(--color-rose-500)");
export const inset_shadow_rose_600 = insetShadowColor("var(--color-rose-600)");
export const inset_shadow_rose_700 = insetShadowColor("var(--color-rose-700)");
export const inset_shadow_rose_800 = insetShadowColor("var(--color-rose-800)");
export const inset_shadow_rose_900 = insetShadowColor("var(--color-rose-900)");
export const inset_shadow_rose_950 = insetShadowColor("var(--color-rose-950)");
export const inset_shadow_slate_50 = insetShadowColor("var(--color-slate-50)");
export const inset_shadow_slate_100 = insetShadowColor(
  "var(--color-slate-100)",
);
export const inset_shadow_slate_200 = insetShadowColor(
  "var(--color-slate-200)",
);
export const inset_shadow_slate_300 = insetShadowColor(
  "var(--color-slate-300)",
);
export const inset_shadow_slate_400 = insetShadowColor(
  "var(--color-slate-400)",
);
export const inset_shadow_slate_500 = insetShadowColor(
  "var(--color-slate-500)",
);
export const inset_shadow_slate_600 = insetShadowColor(
  "var(--color-slate-600)",
);
export const inset_shadow_slate_700 = insetShadowColor(
  "var(--color-slate-700)",
);
export const inset_shadow_slate_800 = insetShadowColor(
  "var(--color-slate-800)",
);
export const inset_shadow_slate_900 = insetShadowColor(
  "var(--color-slate-900)",
);
export const inset_shadow_slate_950 = insetShadowColor(
  "var(--color-slate-950)",
);
export const inset_shadow_gray_50 = insetShadowColor("var(--color-gray-50)");
export const inset_shadow_gray_100 = insetShadowColor("var(--color-gray-100)");
export const inset_shadow_gray_200 = insetShadowColor("var(--color-gray-200)");
export const inset_shadow_gray_300 = insetShadowColor("var(--color-gray-300)");
export const inset_shadow_gray_400 = insetShadowColor("var(--color-gray-400)");
export const inset_shadow_gray_500 = insetShadowColor("var(--color-gray-500)");
export const inset_shadow_gray_600 = insetShadowColor("var(--color-gray-600)");
export const inset_shadow_gray_700 = insetShadowColor("var(--color-gray-700)");
export const inset_shadow_gray_800 = insetShadowColor("var(--color-gray-800)");
export const inset_shadow_gray_900 = insetShadowColor("var(--color-gray-900)");
export const inset_shadow_gray_950 = insetShadowColor("var(--color-gray-950)");
export const inset_shadow_zinc_50 = insetShadowColor("var(--color-zinc-50)");
export const inset_shadow_zinc_100 = insetShadowColor("var(--color-zinc-100)");
export const inset_shadow_zinc_200 = insetShadowColor("var(--color-zinc-200)");
export const inset_shadow_zinc_300 = insetShadowColor("var(--color-zinc-300)");
export const inset_shadow_zinc_400 = insetShadowColor("var(--color-zinc-400)");
export const inset_shadow_zinc_500 = insetShadowColor("var(--color-zinc-500)");
export const inset_shadow_zinc_600 = insetShadowColor("var(--color-zinc-600)");
export const inset_shadow_zinc_700 = insetShadowColor("var(--color-zinc-700)");
export const inset_shadow_zinc_800 = insetShadowColor("var(--color-zinc-800)");
export const inset_shadow_zinc_900 = insetShadowColor("var(--color-zinc-900)");
export const inset_shadow_zinc_950 = insetShadowColor("var(--color-zinc-950)");
export const inset_shadow_neutral_50 = insetShadowColor(
  "var(--color-neutral-50)",
);
export const inset_shadow_neutral_100 = insetShadowColor(
  "var(--color-neutral-100)",
);
export const inset_shadow_neutral_200 = insetShadowColor(
  "var(--color-neutral-200)",
);
export const inset_shadow_neutral_300 = insetShadowColor(
  "var(--color-neutral-300)",
);
export const inset_shadow_neutral_400 = insetShadowColor(
  "var(--color-neutral-400)",
);
export const inset_shadow_neutral_500 = insetShadowColor(
  "var(--color-neutral-500)",
);
export const inset_shadow_neutral_600 = insetShadowColor(
  "var(--color-neutral-600)",
);
export const inset_shadow_neutral_700 = insetShadowColor(
  "var(--color-neutral-700)",
);
export const inset_shadow_neutral_800 = insetShadowColor(
  "var(--color-neutral-800)",
);
export const inset_shadow_neutral_900 = insetShadowColor(
  "var(--color-neutral-900)",
);
export const inset_shadow_neutral_950 = insetShadowColor(
  "var(--color-neutral-950)",
);
export const inset_shadow_stone_50 = insetShadowColor("var(--color-stone-50)");
export const inset_shadow_stone_100 = insetShadowColor(
  "var(--color-stone-100)",
);
export const inset_shadow_stone_200 = insetShadowColor(
  "var(--color-stone-200)",
);
export const inset_shadow_stone_300 = insetShadowColor(
  "var(--color-stone-300)",
);
export const inset_shadow_stone_400 = insetShadowColor(
  "var(--color-stone-400)",
);
export const inset_shadow_stone_500 = insetShadowColor(
  "var(--color-stone-500)",
);
export const inset_shadow_stone_600 = insetShadowColor(
  "var(--color-stone-600)",
);
export const inset_shadow_stone_700 = insetShadowColor(
  "var(--color-stone-700)",
);
export const inset_shadow_stone_800 = insetShadowColor(
  "var(--color-stone-800)",
);
export const inset_shadow_stone_900 = insetShadowColor(
  "var(--color-stone-900)",
);
export const inset_shadow_stone_950 = insetShadowColor(
  "var(--color-stone-950)",
);
export const ring = (value: TemplateStringsArray = ["1px"] as any) => css`
  --tw-ring-shadow: 0 0 0
    ${/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value[0]) ? value[0] + "px" : value[0]};
`;
const ringColor = (value: string) => css`
  --tw-ring-color: ${value};
`;
export const ring_inherit = ringColor("inherit");
export const ring_current = ringColor("currentColor");
export const ring_transparent = ringColor("transparent");
export const ring_black = ringColor("var(--color-black)");
export const ring_white = ringColor("var(--color-white)");
export const ring_red_50 = ringColor("var(--color-red-50)");
export const ring_red_100 = ringColor("var(--color-red-100)");
export const ring_red_200 = ringColor("var(--color-red-200)");
export const ring_red_300 = ringColor("var(--color-red-300)");
export const ring_red_400 = ringColor("var(--color-red-400)");
export const ring_red_500 = ringColor("var(--color-red-500)");
export const ring_red_600 = ringColor("var(--color-red-600)");
export const ring_red_700 = ringColor("var(--color-red-700)");
export const ring_red_800 = ringColor("var(--color-red-800)");
export const ring_red_900 = ringColor("var(--color-red-900)");
export const ring_red_950 = ringColor("var(--color-red-950)");
export const ring_orange_50 = ringColor("var(--color-orange-50)");
export const ring_orange_100 = ringColor("var(--color-orange-100)");
export const ring_orange_200 = ringColor("var(--color-orange-200)");
export const ring_orange_300 = ringColor("var(--color-orange-300)");
export const ring_orange_400 = ringColor("var(--color-orange-400)");
export const ring_orange_500 = ringColor("var(--color-orange-500)");
export const ring_orange_600 = ringColor("var(--color-orange-600)");
export const ring_orange_700 = ringColor("var(--color-orange-700)");
export const ring_orange_800 = ringColor("var(--color-orange-800)");
export const ring_orange_900 = ringColor("var(--color-orange-900)");
export const ring_orange_950 = ringColor("var(--color-orange-950)");
export const ring_amber_50 = ringColor("var(--color-amber-50)");
export const ring_amber_100 = ringColor("var(--color-amber-100)");
export const ring_amber_200 = ringColor("var(--color-amber-200)");
export const ring_amber_300 = ringColor("var(--color-amber-300)");
export const ring_amber_400 = ringColor("var(--color-amber-400)");
export const ring_amber_500 = ringColor("var(--color-amber-500)");
export const ring_amber_600 = ringColor("var(--color-amber-600)");
export const ring_amber_700 = ringColor("var(--color-amber-700)");
export const ring_amber_800 = ringColor("var(--color-amber-800)");
export const ring_amber_900 = ringColor("var(--color-amber-900)");
export const ring_amber_950 = ringColor("var(--color-amber-950)");
export const ring_yellow_50 = ringColor("var(--color-yellow-50)");
export const ring_yellow_100 = ringColor("var(--color-yellow-100)");
export const ring_yellow_200 = ringColor("var(--color-yellow-200)");
export const ring_yellow_300 = ringColor("var(--color-yellow-300)");
export const ring_yellow_400 = ringColor("var(--color-yellow-400)");
export const ring_yellow_500 = ringColor("var(--color-yellow-500)");
export const ring_yellow_600 = ringColor("var(--color-yellow-600)");
export const ring_yellow_700 = ringColor("var(--color-yellow-700)");
export const ring_yellow_800 = ringColor("var(--color-yellow-800)");
export const ring_yellow_900 = ringColor("var(--color-yellow-900)");
export const ring_yellow_950 = ringColor("var(--color-yellow-950)");
export const ring_lime_50 = ringColor("var(--color-lime-50)");
export const ring_lime_100 = ringColor("var(--color-lime-100)");
export const ring_lime_200 = ringColor("var(--color-lime-200)");
export const ring_lime_300 = ringColor("var(--color-lime-300)");
export const ring_lime_400 = ringColor("var(--color-lime-400)");
export const ring_lime_500 = ringColor("var(--color-lime-500)");
export const ring_lime_600 = ringColor("var(--color-lime-600)");
export const ring_lime_700 = ringColor("var(--color-lime-700)");
export const ring_lime_800 = ringColor("var(--color-lime-800)");
export const ring_lime_900 = ringColor("var(--color-lime-900)");
export const ring_lime_950 = ringColor("var(--color-lime-950)");
export const ring_green_50 = ringColor("var(--color-green-50)");
export const ring_green_100 = ringColor("var(--color-green-100)");
export const ring_green_200 = ringColor("var(--color-green-200)");
export const ring_green_300 = ringColor("var(--color-green-300)");
export const ring_green_400 = ringColor("var(--color-green-400)");
export const ring_green_500 = ringColor("var(--color-green-500)");
export const ring_green_600 = ringColor("var(--color-green-600)");
export const ring_green_700 = ringColor("var(--color-green-700)");
export const ring_green_800 = ringColor("var(--color-green-800)");
export const ring_green_900 = ringColor("var(--color-green-900)");
export const ring_green_950 = ringColor("var(--color-green-950)");
export const ring_emerald_50 = ringColor("var(--color-emerald-50)");
export const ring_emerald_100 = ringColor("var(--color-emerald-100)");
export const ring_emerald_200 = ringColor("var(--color-emerald-200)");
export const ring_emerald_300 = ringColor("var(--color-emerald-300)");
export const ring_emerald_400 = ringColor("var(--color-emerald-400)");
export const ring_emerald_500 = ringColor("var(--color-emerald-500)");
export const ring_emerald_600 = ringColor("var(--color-emerald-600)");
export const ring_emerald_700 = ringColor("var(--color-emerald-700)");
export const ring_emerald_800 = ringColor("var(--color-emerald-800)");
export const ring_emerald_900 = ringColor("var(--color-emerald-900)");
export const ring_emerald_950 = ringColor("var(--color-emerald-950)");
export const ring_teal_50 = ringColor("var(--color-teal-50)");
export const ring_teal_100 = ringColor("var(--color-teal-100)");
export const ring_teal_200 = ringColor("var(--color-teal-200)");
export const ring_teal_300 = ringColor("var(--color-teal-300)");
export const ring_teal_400 = ringColor("var(--color-teal-400)");
export const ring_teal_500 = ringColor("var(--color-teal-500)");
export const ring_teal_600 = ringColor("var(--color-teal-600)");
export const ring_teal_700 = ringColor("var(--color-teal-700)");
export const ring_teal_800 = ringColor("var(--color-teal-800)");
export const ring_teal_900 = ringColor("var(--color-teal-900)");
export const ring_teal_950 = ringColor("var(--color-teal-950)");
export const ring_cyan_50 = ringColor("var(--color-cyan-50)");
export const ring_cyan_100 = ringColor("var(--color-cyan-100)");
export const ring_cyan_200 = ringColor("var(--color-cyan-200)");
export const ring_cyan_300 = ringColor("var(--color-cyan-300)");
export const ring_cyan_400 = ringColor("var(--color-cyan-400)");
export const ring_cyan_500 = ringColor("var(--color-cyan-500)");
export const ring_cyan_600 = ringColor("var(--color-cyan-600)");
export const ring_cyan_700 = ringColor("var(--color-cyan-700)");
export const ring_cyan_800 = ringColor("var(--color-cyan-800)");
export const ring_cyan_900 = ringColor("var(--color-cyan-900)");
export const ring_cyan_950 = ringColor("var(--color-cyan-950)");
export const ring_sky_50 = ringColor("var(--color-sky-50)");
export const ring_sky_100 = ringColor("var(--color-sky-100)");
export const ring_sky_200 = ringColor("var(--color-sky-200)");
export const ring_sky_300 = ringColor("var(--color-sky-300)");
export const ring_sky_400 = ringColor("var(--color-sky-400)");
export const ring_sky_500 = ringColor("var(--color-sky-500)");
export const ring_sky_600 = ringColor("var(--color-sky-600)");
export const ring_sky_700 = ringColor("var(--color-sky-700)");
export const ring_sky_800 = ringColor("var(--color-sky-800)");
export const ring_sky_900 = ringColor("var(--color-sky-900)");
export const ring_sky_950 = ringColor("var(--color-sky-950)");
export const ring_blue_50 = ringColor("var(--color-blue-50)");
export const ring_blue_100 = ringColor("var(--color-blue-100)");
export const ring_blue_200 = ringColor("var(--color-blue-200)");
export const ring_blue_300 = ringColor("var(--color-blue-300)");
export const ring_blue_400 = ringColor("var(--color-blue-400)");
export const ring_blue_500 = ringColor("var(--color-blue-500)");
export const ring_blue_600 = ringColor("var(--color-blue-600)");
export const ring_blue_700 = ringColor("var(--color-blue-700)");
export const ring_blue_800 = ringColor("var(--color-blue-800)");
export const ring_blue_900 = ringColor("var(--color-blue-900)");
export const ring_blue_950 = ringColor("var(--color-blue-950)");
export const ring_indigo_50 = ringColor("var(--color-indigo-50)");
export const ring_indigo_100 = ringColor("var(--color-indigo-100)");
export const ring_indigo_200 = ringColor("var(--color-indigo-200)");
export const ring_indigo_300 = ringColor("var(--color-indigo-300)");
export const ring_indigo_400 = ringColor("var(--color-indigo-400)");
export const ring_indigo_500 = ringColor("var(--color-indigo-500)");
export const ring_indigo_600 = ringColor("var(--color-indigo-600)");
export const ring_indigo_700 = ringColor("var(--color-indigo-700)");
export const ring_indigo_800 = ringColor("var(--color-indigo-800)");
export const ring_indigo_900 = ringColor("var(--color-indigo-900)");
export const ring_indigo_950 = ringColor("var(--color-indigo-950)");
export const ring_violet_50 = ringColor("var(--color-violet-50)");
export const ring_violet_100 = ringColor("var(--color-violet-100)");
export const ring_violet_200 = ringColor("var(--color-violet-200)");
export const ring_violet_300 = ringColor("var(--color-violet-300)");
export const ring_violet_400 = ringColor("var(--color-violet-400)");
export const ring_violet_500 = ringColor("var(--color-violet-500)");
export const ring_violet_600 = ringColor("var(--color-violet-600)");
export const ring_violet_700 = ringColor("var(--color-violet-700)");
export const ring_violet_800 = ringColor("var(--color-violet-800)");
export const ring_violet_900 = ringColor("var(--color-violet-900)");
export const ring_violet_950 = ringColor("var(--color-violet-950)");
export const ring_purple_50 = ringColor("var(--color-purple-50)");
export const ring_purple_100 = ringColor("var(--color-purple-100)");
export const ring_purple_200 = ringColor("var(--color-purple-200)");
export const ring_purple_300 = ringColor("var(--color-purple-300)");
export const ring_purple_400 = ringColor("var(--color-purple-400)");
export const ring_purple_500 = ringColor("var(--color-purple-500)");
export const ring_purple_600 = ringColor("var(--color-purple-600)");
export const ring_purple_700 = ringColor("var(--color-purple-700)");
export const ring_purple_800 = ringColor("var(--color-purple-800)");
export const ring_purple_900 = ringColor("var(--color-purple-900)");
export const ring_purple_950 = ringColor("var(--color-purple-950)");
export const ring_fuchsia_50 = ringColor("var(--color-fuchsia-50)");
export const ring_fuchsia_100 = ringColor("var(--color-fuchsia-100)");
export const ring_fuchsia_200 = ringColor("var(--color-fuchsia-200)");
export const ring_fuchsia_300 = ringColor("var(--color-fuchsia-300)");
export const ring_fuchsia_400 = ringColor("var(--color-fuchsia-400)");
export const ring_fuchsia_500 = ringColor("var(--color-fuchsia-500)");
export const ring_fuchsia_600 = ringColor("var(--color-fuchsia-600)");
export const ring_fuchsia_700 = ringColor("var(--color-fuchsia-700)");
export const ring_fuchsia_800 = ringColor("var(--color-fuchsia-800)");
export const ring_fuchsia_900 = ringColor("var(--color-fuchsia-900)");
export const ring_fuchsia_950 = ringColor("var(--color-fuchsia-950)");
export const ring_pink_50 = ringColor("var(--color-pink-50)");
export const ring_pink_100 = ringColor("var(--color-pink-100)");
export const ring_pink_200 = ringColor("var(--color-pink-200)");
export const ring_pink_300 = ringColor("var(--color-pink-300)");
export const ring_pink_400 = ringColor("var(--color-pink-400)");
export const ring_pink_500 = ringColor("var(--color-pink-500)");
export const ring_pink_600 = ringColor("var(--color-pink-600)");
export const ring_pink_700 = ringColor("var(--color-pink-700)");
export const ring_pink_800 = ringColor("var(--color-pink-800)");
export const ring_pink_900 = ringColor("var(--color-pink-900)");
export const ring_pink_950 = ringColor("var(--color-pink-950)");
export const ring_rose_50 = ringColor("var(--color-rose-50)");
export const ring_rose_100 = ringColor("var(--color-rose-100)");
export const ring_rose_200 = ringColor("var(--color-rose-200)");
export const ring_rose_300 = ringColor("var(--color-rose-300)");
export const ring_rose_400 = ringColor("var(--color-rose-400)");
export const ring_rose_500 = ringColor("var(--color-rose-500)");
export const ring_rose_600 = ringColor("var(--color-rose-600)");
export const ring_rose_700 = ringColor("var(--color-rose-700)");
export const ring_rose_800 = ringColor("var(--color-rose-800)");
export const ring_rose_900 = ringColor("var(--color-rose-900)");
export const ring_rose_950 = ringColor("var(--color-rose-950)");
export const ring_slate_50 = ringColor("var(--color-slate-50)");
export const ring_slate_100 = ringColor("var(--color-slate-100)");
export const ring_slate_200 = ringColor("var(--color-slate-200)");
export const ring_slate_300 = ringColor("var(--color-slate-300)");
export const ring_slate_400 = ringColor("var(--color-slate-400)");
export const ring_slate_500 = ringColor("var(--color-slate-500)");
export const ring_slate_600 = ringColor("var(--color-slate-600)");
export const ring_slate_700 = ringColor("var(--color-slate-700)");
export const ring_slate_800 = ringColor("var(--color-slate-800)");
export const ring_slate_900 = ringColor("var(--color-slate-900)");
export const ring_slate_950 = ringColor("var(--color-slate-950)");
export const ring_gray_50 = ringColor("var(--color-gray-50)");
export const ring_gray_100 = ringColor("var(--color-gray-100)");
export const ring_gray_200 = ringColor("var(--color-gray-200)");
export const ring_gray_300 = ringColor("var(--color-gray-300)");
export const ring_gray_400 = ringColor("var(--color-gray-400)");
export const ring_gray_500 = ringColor("var(--color-gray-500)");
export const ring_gray_600 = ringColor("var(--color-gray-600)");
export const ring_gray_700 = ringColor("var(--color-gray-700)");
export const ring_gray_800 = ringColor("var(--color-gray-800)");
export const ring_gray_900 = ringColor("var(--color-gray-900)");
export const ring_gray_950 = ringColor("var(--color-gray-950)");
export const ring_zinc_50 = ringColor("var(--color-zinc-50)");
export const ring_zinc_100 = ringColor("var(--color-zinc-100)");
export const ring_zinc_200 = ringColor("var(--color-zinc-200)");
export const ring_zinc_300 = ringColor("var(--color-zinc-300)");
export const ring_zinc_400 = ringColor("var(--color-zinc-400)");
export const ring_zinc_500 = ringColor("var(--color-zinc-500)");
export const ring_zinc_600 = ringColor("var(--color-zinc-600)");
export const ring_zinc_700 = ringColor("var(--color-zinc-700)");
export const ring_zinc_800 = ringColor("var(--color-zinc-800)");
export const ring_zinc_900 = ringColor("var(--color-zinc-900)");
export const ring_zinc_950 = ringColor("var(--color-zinc-950)");
export const ring_neutral_50 = ringColor("var(--color-neutral-50)");
export const ring_neutral_100 = ringColor("var(--color-neutral-100)");
export const ring_neutral_200 = ringColor("var(--color-neutral-200)");
export const ring_neutral_300 = ringColor("var(--color-neutral-300)");
export const ring_neutral_400 = ringColor("var(--color-neutral-400)");
export const ring_neutral_500 = ringColor("var(--color-neutral-500)");
export const ring_neutral_600 = ringColor("var(--color-neutral-600)");
export const ring_neutral_700 = ringColor("var(--color-neutral-700)");
export const ring_neutral_800 = ringColor("var(--color-neutral-800)");
export const ring_neutral_900 = ringColor("var(--color-neutral-900)");
export const ring_neutral_950 = ringColor("var(--color-neutral-950)");
export const ring_stone_50 = ringColor("var(--color-stone-50)");
export const ring_stone_100 = ringColor("var(--color-stone-100)");
export const ring_stone_200 = ringColor("var(--color-stone-200)");
export const ring_stone_300 = ringColor("var(--color-stone-300)");
export const ring_stone_400 = ringColor("var(--color-stone-400)");
export const ring_stone_500 = ringColor("var(--color-stone-500)");
export const ring_stone_600 = ringColor("var(--color-stone-600)");
export const ring_stone_700 = ringColor("var(--color-stone-700)");
export const ring_stone_800 = ringColor("var(--color-stone-800)");
export const ring_stone_900 = ringColor("var(--color-stone-900)");
export const ring_stone_950 = ringColor("var(--color-stone-950)");
export const inset_ring = (value: TemplateStringsArray = ["1px"] as any) => css`
  --tw-inset-ring-shadow: 0 0 0
    ${/^-?(0|[1-9]\d*)(\.\d*)?$/.test(value[0]) ? value[0] + "px" : value[0]};
`;
const insetRingColor = (value: string) => css`
  --tw-inset-ring-color: ${value};
`;
export const inset_ring_inherit = insetRingColor("inherit");
export const inset_ring_current = insetRingColor("currentColor");
export const inset_ring_transparent = insetRingColor("transparent");
export const inset_ring_black = insetRingColor("var(--color-black)");
export const inset_ring_white = insetRingColor("var(--color-white)");
export const inset_ring_red_50 = insetRingColor("var(--color-red-50)");
export const inset_ring_red_100 = insetRingColor("var(--color-red-100)");
export const inset_ring_red_200 = insetRingColor("var(--color-red-200)");
export const inset_ring_red_300 = insetRingColor("var(--color-red-300)");
export const inset_ring_red_400 = insetRingColor("var(--color-red-400)");
export const inset_ring_red_500 = insetRingColor("var(--color-red-500)");
export const inset_ring_red_600 = insetRingColor("var(--color-red-600)");
export const inset_ring_red_700 = insetRingColor("var(--color-red-700)");
export const inset_ring_red_800 = insetRingColor("var(--color-red-800)");
export const inset_ring_red_900 = insetRingColor("var(--color-red-900)");
export const inset_ring_red_950 = insetRingColor("var(--color-red-950)");
export const inset_ring_orange_50 = insetRingColor("var(--color-orange-50)");
export const inset_ring_orange_100 = insetRingColor("var(--color-orange-100)");
export const inset_ring_orange_200 = insetRingColor("var(--color-orange-200)");
export const inset_ring_orange_300 = insetRingColor("var(--color-orange-300)");
export const inset_ring_orange_400 = insetRingColor("var(--color-orange-400)");
export const inset_ring_orange_500 = insetRingColor("var(--color-orange-500)");
export const inset_ring_orange_600 = insetRingColor("var(--color-orange-600)");
export const inset_ring_orange_700 = insetRingColor("var(--color-orange-700)");
export const inset_ring_orange_800 = insetRingColor("var(--color-orange-800)");
export const inset_ring_orange_900 = insetRingColor("var(--color-orange-900)");
export const inset_ring_orange_950 = insetRingColor("var(--color-orange-950)");
export const inset_ring_amber_50 = insetRingColor("var(--color-amber-50)");
export const inset_ring_amber_100 = insetRingColor("var(--color-amber-100)");
export const inset_ring_amber_200 = insetRingColor("var(--color-amber-200)");
export const inset_ring_amber_300 = insetRingColor("var(--color-amber-300)");
export const inset_ring_amber_400 = insetRingColor("var(--color-amber-400)");
export const inset_ring_amber_500 = insetRingColor("var(--color-amber-500)");
export const inset_ring_amber_600 = insetRingColor("var(--color-amber-600)");
export const inset_ring_amber_700 = insetRingColor("var(--color-amber-700)");
export const inset_ring_amber_800 = insetRingColor("var(--color-amber-800)");
export const inset_ring_amber_900 = insetRingColor("var(--color-amber-900)");
export const inset_ring_amber_950 = insetRingColor("var(--color-amber-950)");
export const inset_ring_yellow_50 = insetRingColor("var(--color-yellow-50)");
export const inset_ring_yellow_100 = insetRingColor("var(--color-yellow-100)");
export const inset_ring_yellow_200 = insetRingColor("var(--color-yellow-200)");
export const inset_ring_yellow_300 = insetRingColor("var(--color-yellow-300)");
export const inset_ring_yellow_400 = insetRingColor("var(--color-yellow-400)");
export const inset_ring_yellow_500 = insetRingColor("var(--color-yellow-500)");
export const inset_ring_yellow_600 = insetRingColor("var(--color-yellow-600)");
export const inset_ring_yellow_700 = insetRingColor("var(--color-yellow-700)");
export const inset_ring_yellow_800 = insetRingColor("var(--color-yellow-800)");
export const inset_ring_yellow_900 = insetRingColor("var(--color-yellow-900)");
export const inset_ring_yellow_950 = insetRingColor("var(--color-yellow-950)");
export const inset_ring_lime_50 = insetRingColor("var(--color-lime-50)");
export const inset_ring_lime_100 = insetRingColor("var(--color-lime-100)");
export const inset_ring_lime_200 = insetRingColor("var(--color-lime-200)");
export const inset_ring_lime_300 = insetRingColor("var(--color-lime-300)");
export const inset_ring_lime_400 = insetRingColor("var(--color-lime-400)");
export const inset_ring_lime_500 = insetRingColor("var(--color-lime-500)");
export const inset_ring_lime_600 = insetRingColor("var(--color-lime-600)");
export const inset_ring_lime_700 = insetRingColor("var(--color-lime-700)");
export const inset_ring_lime_800 = insetRingColor("var(--color-lime-800)");
export const inset_ring_lime_900 = insetRingColor("var(--color-lime-900)");
export const inset_ring_lime_950 = insetRingColor("var(--color-lime-950)");
export const inset_ring_green_50 = insetRingColor("var(--color-green-50)");
export const inset_ring_green_100 = insetRingColor("var(--color-green-100)");
export const inset_ring_green_200 = insetRingColor("var(--color-green-200)");
export const inset_ring_green_300 = insetRingColor("var(--color-green-300)");
export const inset_ring_green_400 = insetRingColor("var(--color-green-400)");
export const inset_ring_green_500 = insetRingColor("var(--color-green-500)");
export const inset_ring_green_600 = insetRingColor("var(--color-green-600)");
export const inset_ring_green_700 = insetRingColor("var(--color-green-700)");
export const inset_ring_green_800 = insetRingColor("var(--color-green-800)");
export const inset_ring_green_900 = insetRingColor("var(--color-green-900)");
export const inset_ring_green_950 = insetRingColor("var(--color-green-950)");
export const inset_ring_emerald_50 = insetRingColor("var(--color-emerald-50)");
export const inset_ring_emerald_100 = insetRingColor(
  "var(--color-emerald-100)",
);
export const inset_ring_emerald_200 = insetRingColor(
  "var(--color-emerald-200)",
);
export const inset_ring_emerald_300 = insetRingColor(
  "var(--color-emerald-300)",
);
export const inset_ring_emerald_400 = insetRingColor(
  "var(--color-emerald-400)",
);
export const inset_ring_emerald_500 = insetRingColor(
  "var(--color-emerald-500)",
);
export const inset_ring_emerald_600 = insetRingColor(
  "var(--color-emerald-600)",
);
export const inset_ring_emerald_700 = insetRingColor(
  "var(--color-emerald-700)",
);
export const inset_ring_emerald_800 = insetRingColor(
  "var(--color-emerald-800)",
);
export const inset_ring_emerald_900 = insetRingColor(
  "var(--color-emerald-900)",
);
export const inset_ring_emerald_950 = insetRingColor(
  "var(--color-emerald-950)",
);
export const inset_ring_teal_50 = insetRingColor("var(--color-teal-50)");
export const inset_ring_teal_100 = insetRingColor("var(--color-teal-100)");
export const inset_ring_teal_200 = insetRingColor("var(--color-teal-200)");
export const inset_ring_teal_300 = insetRingColor("var(--color-teal-300)");
export const inset_ring_teal_400 = insetRingColor("var(--color-teal-400)");
export const inset_ring_teal_500 = insetRingColor("var(--color-teal-500)");
export const inset_ring_teal_600 = insetRingColor("var(--color-teal-600)");
export const inset_ring_teal_700 = insetRingColor("var(--color-teal-700)");
export const inset_ring_teal_800 = insetRingColor("var(--color-teal-800)");
export const inset_ring_teal_900 = insetRingColor("var(--color-teal-900)");
export const inset_ring_teal_950 = insetRingColor("var(--color-teal-950)");
export const inset_ring_cyan_50 = insetRingColor("var(--color-cyan-50)");
export const inset_ring_cyan_100 = insetRingColor("var(--color-cyan-100)");
export const inset_ring_cyan_200 = insetRingColor("var(--color-cyan-200)");
export const inset_ring_cyan_300 = insetRingColor("var(--color-cyan-300)");
export const inset_ring_cyan_400 = insetRingColor("var(--color-cyan-400)");
export const inset_ring_cyan_500 = insetRingColor("var(--color-cyan-500)");
export const inset_ring_cyan_600 = insetRingColor("var(--color-cyan-600)");
export const inset_ring_cyan_700 = insetRingColor("var(--color-cyan-700)");
export const inset_ring_cyan_800 = insetRingColor("var(--color-cyan-800)");
export const inset_ring_cyan_900 = insetRingColor("var(--color-cyan-900)");
export const inset_ring_cyan_950 = insetRingColor("var(--color-cyan-950)");
export const inset_ring_sky_50 = insetRingColor("var(--color-sky-50)");
export const inset_ring_sky_100 = insetRingColor("var(--color-sky-100)");
export const inset_ring_sky_200 = insetRingColor("var(--color-sky-200)");
export const inset_ring_sky_300 = insetRingColor("var(--color-sky-300)");
export const inset_ring_sky_400 = insetRingColor("var(--color-sky-400)");
export const inset_ring_sky_500 = insetRingColor("var(--color-sky-500)");
export const inset_ring_sky_600 = insetRingColor("var(--color-sky-600)");
export const inset_ring_sky_700 = insetRingColor("var(--color-sky-700)");
export const inset_ring_sky_800 = insetRingColor("var(--color-sky-800)");
export const inset_ring_sky_900 = insetRingColor("var(--color-sky-900)");
export const inset_ring_sky_950 = insetRingColor("var(--color-sky-950)");
export const inset_ring_blue_50 = insetRingColor("var(--color-blue-50)");
export const inset_ring_blue_100 = insetRingColor("var(--color-blue-100)");
export const inset_ring_blue_200 = insetRingColor("var(--color-blue-200)");
export const inset_ring_blue_300 = insetRingColor("var(--color-blue-300)");
export const inset_ring_blue_400 = insetRingColor("var(--color-blue-400)");
export const inset_ring_blue_500 = insetRingColor("var(--color-blue-500)");
export const inset_ring_blue_600 = insetRingColor("var(--color-blue-600)");
export const inset_ring_blue_700 = insetRingColor("var(--color-blue-700)");
export const inset_ring_blue_800 = insetRingColor("var(--color-blue-800)");
export const inset_ring_blue_900 = insetRingColor("var(--color-blue-900)");
export const inset_ring_blue_950 = insetRingColor("var(--color-blue-950)");
export const inset_ring_indigo_50 = insetRingColor("var(--color-indigo-50)");
export const inset_ring_indigo_100 = insetRingColor("var(--color-indigo-100)");
export const inset_ring_indigo_200 = insetRingColor("var(--color-indigo-200)");
export const inset_ring_indigo_300 = insetRingColor("var(--color-indigo-300)");
export const inset_ring_indigo_400 = insetRingColor("var(--color-indigo-400)");
export const inset_ring_indigo_500 = insetRingColor("var(--color-indigo-500)");
export const inset_ring_indigo_600 = insetRingColor("var(--color-indigo-600)");
export const inset_ring_indigo_700 = insetRingColor("var(--color-indigo-700)");
export const inset_ring_indigo_800 = insetRingColor("var(--color-indigo-800)");
export const inset_ring_indigo_900 = insetRingColor("var(--color-indigo-900)");
export const inset_ring_indigo_950 = insetRingColor("var(--color-indigo-950)");
export const inset_ring_violet_50 = insetRingColor("var(--color-violet-50)");
export const inset_ring_violet_100 = insetRingColor("var(--color-violet-100)");
export const inset_ring_violet_200 = insetRingColor("var(--color-violet-200)");
export const inset_ring_violet_300 = insetRingColor("var(--color-violet-300)");
export const inset_ring_violet_400 = insetRingColor("var(--color-violet-400)");
export const inset_ring_violet_500 = insetRingColor("var(--color-violet-500)");
export const inset_ring_violet_600 = insetRingColor("var(--color-violet-600)");
export const inset_ring_violet_700 = insetRingColor("var(--color-violet-700)");
export const inset_ring_violet_800 = insetRingColor("var(--color-violet-800)");
export const inset_ring_violet_900 = insetRingColor("var(--color-violet-900)");
export const inset_ring_violet_950 = insetRingColor("var(--color-violet-950)");
export const inset_ring_purple_50 = insetRingColor("var(--color-purple-50)");
export const inset_ring_purple_100 = insetRingColor("var(--color-purple-100)");
export const inset_ring_purple_200 = insetRingColor("var(--color-purple-200)");
export const inset_ring_purple_300 = insetRingColor("var(--color-purple-300)");
export const inset_ring_purple_400 = insetRingColor("var(--color-purple-400)");
export const inset_ring_purple_500 = insetRingColor("var(--color-purple-500)");
export const inset_ring_purple_600 = insetRingColor("var(--color-purple-600)");
export const inset_ring_purple_700 = insetRingColor("var(--color-purple-700)");
export const inset_ring_purple_800 = insetRingColor("var(--color-purple-800)");
export const inset_ring_purple_900 = insetRingColor("var(--color-purple-900)");
export const inset_ring_purple_950 = insetRingColor("var(--color-purple-950)");
export const inset_ring_fuchsia_50 = insetRingColor("var(--color-fuchsia-50)");
export const inset_ring_fuchsia_100 = insetRingColor(
  "var(--color-fuchsia-100)",
);
export const inset_ring_fuchsia_200 = insetRingColor(
  "var(--color-fuchsia-200)",
);
export const inset_ring_fuchsia_300 = insetRingColor(
  "var(--color-fuchsia-300)",
);
export const inset_ring_fuchsia_400 = insetRingColor(
  "var(--color-fuchsia-400)",
);
export const inset_ring_fuchsia_500 = insetRingColor(
  "var(--color-fuchsia-500)",
);
export const inset_ring_fuchsia_600 = insetRingColor(
  "var(--color-fuchsia-600)",
);
export const inset_ring_fuchsia_700 = insetRingColor(
  "var(--color-fuchsia-700)",
);
export const inset_ring_fuchsia_800 = insetRingColor(
  "var(--color-fuchsia-800)",
);
export const inset_ring_fuchsia_900 = insetRingColor(
  "var(--color-fuchsia-900)",
);
export const inset_ring_fuchsia_950 = insetRingColor(
  "var(--color-fuchsia-950)",
);
export const inset_ring_pink_50 = insetRingColor("var(--color-pink-50)");
export const inset_ring_pink_100 = insetRingColor("var(--color-pink-100)");
export const inset_ring_pink_200 = insetRingColor("var(--color-pink-200)");
export const inset_ring_pink_300 = insetRingColor("var(--color-pink-300)");
export const inset_ring_pink_400 = insetRingColor("var(--color-pink-400)");
export const inset_ring_pink_500 = insetRingColor("var(--color-pink-500)");
export const inset_ring_pink_600 = insetRingColor("var(--color-pink-600)");
export const inset_ring_pink_700 = insetRingColor("var(--color-pink-700)");
export const inset_ring_pink_800 = insetRingColor("var(--color-pink-800)");
export const inset_ring_pink_900 = insetRingColor("var(--color-pink-900)");
export const inset_ring_pink_950 = insetRingColor("var(--color-pink-950)");
export const inset_ring_rose_50 = insetRingColor("var(--color-rose-50)");
export const inset_ring_rose_100 = insetRingColor("var(--color-rose-100)");
export const inset_ring_rose_200 = insetRingColor("var(--color-rose-200)");
export const inset_ring_rose_300 = insetRingColor("var(--color-rose-300)");
export const inset_ring_rose_400 = insetRingColor("var(--color-rose-400)");
export const inset_ring_rose_500 = insetRingColor("var(--color-rose-500)");
export const inset_ring_rose_600 = insetRingColor("var(--color-rose-600)");
export const inset_ring_rose_700 = insetRingColor("var(--color-rose-700)");
export const inset_ring_rose_800 = insetRingColor("var(--color-rose-800)");
export const inset_ring_rose_900 = insetRingColor("var(--color-rose-900)");
export const inset_ring_rose_950 = insetRingColor("var(--color-rose-950)");
export const inset_ring_slate_50 = insetRingColor("var(--color-slate-50)");
export const inset_ring_slate_100 = insetRingColor("var(--color-slate-100)");
export const inset_ring_slate_200 = insetRingColor("var(--color-slate-200)");
export const inset_ring_slate_300 = insetRingColor("var(--color-slate-300)");
export const inset_ring_slate_400 = insetRingColor("var(--color-slate-400)");
export const inset_ring_slate_500 = insetRingColor("var(--color-slate-500)");
export const inset_ring_slate_600 = insetRingColor("var(--color-slate-600)");
export const inset_ring_slate_700 = insetRingColor("var(--color-slate-700)");
export const inset_ring_slate_800 = insetRingColor("var(--color-slate-800)");
export const inset_ring_slate_900 = insetRingColor("var(--color-slate-900)");
export const inset_ring_slate_950 = insetRingColor("var(--color-slate-950)");
export const inset_ring_gray_50 = insetRingColor("var(--color-gray-50)");
export const inset_ring_gray_100 = insetRingColor("var(--color-gray-100)");
export const inset_ring_gray_200 = insetRingColor("var(--color-gray-200)");
export const inset_ring_gray_300 = insetRingColor("var(--color-gray-300)");
export const inset_ring_gray_400 = insetRingColor("var(--color-gray-400)");
export const inset_ring_gray_500 = insetRingColor("var(--color-gray-500)");
export const inset_ring_gray_600 = insetRingColor("var(--color-gray-600)");
export const inset_ring_gray_700 = insetRingColor("var(--color-gray-700)");
export const inset_ring_gray_800 = insetRingColor("var(--color-gray-800)");
export const inset_ring_gray_900 = insetRingColor("var(--color-gray-900)");
export const inset_ring_gray_950 = insetRingColor("var(--color-gray-950)");
export const inset_ring_zinc_50 = insetRingColor("var(--color-zinc-50)");
export const inset_ring_zinc_100 = insetRingColor("var(--color-zinc-100)");
export const inset_ring_zinc_200 = insetRingColor("var(--color-zinc-200)");
export const inset_ring_zinc_300 = insetRingColor("var(--color-zinc-300)");
export const inset_ring_zinc_400 = insetRingColor("var(--color-zinc-400)");
export const inset_ring_zinc_500 = insetRingColor("var(--color-zinc-500)");
export const inset_ring_zinc_600 = insetRingColor("var(--color-zinc-600)");
export const inset_ring_zinc_700 = insetRingColor("var(--color-zinc-700)");
export const inset_ring_zinc_800 = insetRingColor("var(--color-zinc-800)");
export const inset_ring_zinc_900 = insetRingColor("var(--color-zinc-900)");
export const inset_ring_zinc_950 = insetRingColor("var(--color-zinc-950)");
export const inset_ring_neutral_50 = insetRingColor("var(--color-neutral-50)");
export const inset_ring_neutral_100 = insetRingColor(
  "var(--color-neutral-100)",
);
export const inset_ring_neutral_200 = insetRingColor(
  "var(--color-neutral-200)",
);
export const inset_ring_neutral_300 = insetRingColor(
  "var(--color-neutral-300)",
);
export const inset_ring_neutral_400 = insetRingColor(
  "var(--color-neutral-400)",
);
export const inset_ring_neutral_500 = insetRingColor(
  "var(--color-neutral-500)",
);
export const inset_ring_neutral_600 = insetRingColor(
  "var(--color-neutral-600)",
);
export const inset_ring_neutral_700 = insetRingColor(
  "var(--color-neutral-700)",
);
export const inset_ring_neutral_800 = insetRingColor(
  "var(--color-neutral-800)",
);
export const inset_ring_neutral_900 = insetRingColor(
  "var(--color-neutral-900)",
);
export const inset_ring_neutral_950 = insetRingColor(
  "var(--color-neutral-950)",
);
export const inset_ring_stone_50 = insetRingColor("var(--color-stone-50)");
export const inset_ring_stone_100 = insetRingColor("var(--color-stone-100)");
export const inset_ring_stone_200 = insetRingColor("var(--color-stone-200)");
export const inset_ring_stone_300 = insetRingColor("var(--color-stone-300)");
export const inset_ring_stone_400 = insetRingColor("var(--color-stone-400)");
export const inset_ring_stone_500 = insetRingColor("var(--color-stone-500)");
export const inset_ring_stone_600 = insetRingColor("var(--color-stone-600)");
export const inset_ring_stone_700 = insetRingColor("var(--color-stone-700)");
export const inset_ring_stone_800 = insetRingColor("var(--color-stone-800)");
export const inset_ring_stone_900 = insetRingColor("var(--color-stone-900)");
export const inset_ring_stone_950 = insetRingColor("var(--color-stone-950)");
