import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";

const nextPluginFlat = nextPlugin.configs
  ? nextPlugin.configs.flat || nextPlugin.configs["flat/recommended"]
  : null;

const reactHooksFlat = reactHooks.configs
  ? reactHooks.configs["recommended-latest"] || reactHooks.configs.recommended
  : null;

export default [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "public/**"],
  },
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      ...(nextPluginFlat ? nextPluginFlat.rules : {}),
      ...(reactHooksFlat ? reactHooksFlat.rules : {}),
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@next/next/no-img-element": "off",
    },
  },
];
