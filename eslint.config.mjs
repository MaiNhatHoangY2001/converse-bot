import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "**/dist",
      "**/.eslintrc.cjs",
      "**/vite.config.ts",
      "**/tailwind.config.js",
      "**/postcss.config.js",
      "**/eslint.config.mjs",
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "plugin:react/recommended",
      "airbnb",
      "airbnb-typescript",
      "plugin:prettier/recommended",
    ),
  ),
  {
    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "script",
      parserOptions: {
        project: ["./tsconfig.json", "./postcss.config.js"],
      },
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "error",
      "simple-import-sort/imports": "error",
      "react/react-in-jsx-scope": "off",
      "import/order": "off",
      "import/prefer-default-export": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
      "react/button-has-type": "off",
      "prettier/prettier": 0,
      "react/function-component-definition": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
        },
      ],
    },
  },
  ...fixupConfigRules(
    compat.extends(
      "plugin:@typescript-eslint/disable-type-checked",
      "eslint:all",
      "plugin:react/all",
    ),
  ).map((config) => ({
    ...config,
    files: ["./**/*.js"],
  })),
];
