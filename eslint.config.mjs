import pluginQuery from '@tanstack/eslint-plugin-query'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import testingLibrary from 'eslint-plugin-testing-library'
import unusedImports from 'eslint-plugin-unused-imports'
import vitest from 'eslint-plugin-vitest'

export default defineConfig([
    ...nextVitals,
    ...nextTs,
    ...pluginQuery.configs['flat/recommended'],

    {
        plugins: {
            prettier: pluginPrettier,
            'testing-library': testingLibrary,
            vitest,
            'simple-import-sort': simpleImportSort,
            'unused-imports': unusedImports,
        },
        rules: {
            // Prettier will automatically use .prettierrc file
            'prettier/prettier': 'error',

            // 🧹 Import sorting
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'unused-imports/no-unused-imports': 'error',
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

    // ⚠️ Prettier config must come LAST to disable conflicting ESLint rules
    // This disables all formatting-related ESLint rules so Prettier handles formatting
    {
        rules: {
            ...prettierConfig.rules,
            // Explicitly disable indentation rules that conflict with Prettier
            indent: 'off',
            '@typescript-eslint/indent': 'off',
            '@stylistic/indent': 'off',
            '@stylistic/js/indent': 'off',
            '@stylistic/ts/indent': 'off',
        },
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
