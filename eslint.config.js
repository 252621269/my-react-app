import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // 自定义规则
    rules: {
      "react/react-in-jsx-scope": "off", // 禁用 react/react-in-jsx-scope 规则
    },
    settings: {
      react: {
        version: "detect", // 自动检测 React 版本
      },
    },
  },
];