import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginSvelte from "eslint-plugin-svelte";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginSvelte.configs.recommended,
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    ignores: [".astro"],
  },
];
