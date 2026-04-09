import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    ignores: ["dist/**", "**/*.test.js"], // Ignore all files inside dist
  },
  {
    files: ["vite.config.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    // Disable the 'react/react-in-jsx-scope' rule for React 17+
    rules: {
      "react/react-in-jsx-scope": "off", // Disable rule for React in scope
      "react/prop-types": "off", // Optionally disable prop-types check if using TypeScript
    },
  },
];
