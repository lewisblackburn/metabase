import pluginQuery from '@tanstack/eslint-plugin-query'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
// import tailwindcss from "eslint-plugin-tailwindcss"
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import testingLibrary from 'eslint-plugin-testing-library'
import vitest from 'eslint-plugin-vitest'

// ! TODO: tailwind eslint plugin not supported on tailwind v4

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  ...pluginQuery.configs['flat/recommended'],

  {
    plugins: {
      prettier: pluginPrettier,
      'testing-library': testingLibrary,
      vitest,
      // tailwindcss,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',

      // 🧹 Import sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // 🎨 Tailwind rules
      // "tailwindcss/classnames-order": "warn",
      // "tailwindcss/no-custom-classname": "off", // disable if you mix custom + utility classes
    },
    settings: {
      // tailwindcss: {
      //   callees: ["classnames", "clsx", "ctl"], // if you use any of these helpers
      //   config: "tailwind.config.ts", // adjust path if needed
      // },
    },
  },

  // ✅ Tests-only rules and globals
  {
    files: ['**/__tests__/**/*.{js,ts,jsx,tsx}', '**/*.{test,spec}.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    extends: [testingLibrary.configs['flat/react'], vitest.configs.recommended],
  },

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'generated/**',
    'coverage/**',
    'node_modules/**',
    'components/ui/**',
  ]),
])
