import pluginJs from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import eslintPluginTanstackQuery from '@tanstack/eslint-plugin-query';

import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import pluginPromise from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
    },
    {
        languageOptions: {
            ecmaVersion: 'latest',
            globals: { ...globals.browser, ...globals.node }
        }
    },
    {
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
    pluginJs.configs.recommended, // ? https://github.com/eslint/eslint
    importPlugin.flatConfigs.recommended, // ? https://github.com/import-js/eslint-plugin-import
    ...tseslint.configs.recommended, // ? https://github.com/typescript-eslint/typescript-eslint
    pluginPromise.configs['flat/recommended'], // ? https://github.com/eslint-community/eslint-plugin-promise
    pluginReact.configs.flat.recommended, // ? https://github.com/jsx-eslint/eslint-plugin-react
    pluginReact.configs.flat['jsx-runtime'], // ? https://github.com/jsx-eslint/eslint-plugin-react
    eslintConfigPrettier, // ? https://github.com/prettier/eslint-config-prettier
    // TODO: Setup properly: https://www.youtube.com/watch?v=xyxrB2Aa7KE&t=495s
    // eslintPluginBoundaries.configs.recommended, // ? https://github.com/javierbrea/eslint-plugin-boundaries
    eslintPluginTanstackQuery.configs.recommended,
    {
        rules: {
            'no-unused-vars': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'react/display-name': 'off',
            'react/prop-types': 'off',
            'newline-before-return': 'error',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'import/no-unresolved': 'off',
            'import/no-named-as-default': 'off',
            // ! TO COMPILE SHADCN EXAMPLES, PLEASE REMOVE AS NEEDED
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            'react/no-unescaped-entities': 'off',
            'react/no-unknown-property': 'off',
            'tailwindcss/no-unnecessary-arbitrary-value': 'off',
            'tailwindcss/classnames-order': 'off',
            'import/named': 'off',
            'import/no-named-as-default-member': 'off'
        }
    },
    {
        plugins: {
            next: nextPlugin
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            '@next/next/no-img-element': 'off',
            '@next/next/no-html-link-for-pages': 'off'
        }
    },
    {
        ignores: ['.next/*']
    }
];
