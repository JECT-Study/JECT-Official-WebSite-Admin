import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import boundaries from 'eslint-plugin-boundaries';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { defineConfig, globalIgnores } from 'eslint/config';

const FSD_LAYERS = [
  'app',
  'pages',
  'widgets',
  'features',
  'entities',
  'shared',
];

const getLowerLayers = (layer) =>
  FSD_LAYERS.slice(FSD_LAYERS.indexOf(layer) + 1);

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      boundaries,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      'boundaries/elements': FSD_LAYERS.map((layer) => ({
        type: layer,
        pattern: `src/${layer}/*`,
        mode: 'folder',
      })),
    },
    rules: {
      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',
          message:
            '"${file.type}" 레이어에서 "${dependency.type}" 레이어를 import할 수 없습니다. (FSD 의존성 규칙 위반)',
          rules: [
            ...FSD_LAYERS.filter((l) => l !== 'shared').map((layer) => ({
              from: { type: layer },
              allow: { to: { type: getLowerLayers(layer) } },
            })),
            { from: { type: 'shared' }, allow: { to: { type: 'shared' } } },
          ],
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react'],
            ['^@?\\w'],
            ['^@/app'],
            ['^@/pages'],
            ['^@/widgets'],
            ['^@/features'],
            ['^@/entities'],
            ['^@/shared'],
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  eslintConfigPrettier,
  {
    plugins: { prettier: eslintPluginPrettier },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]);
