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
  { type: 'app', pattern: 'src/app/**', mode: 'full' },
  { type: 'pages', pattern: 'src/pages/*', mode: 'folder' },
  { type: 'widgets', pattern: 'src/widgets/*', mode: 'folder' },
  { type: 'features', pattern: 'src/features/*', mode: 'folder' },
  { type: 'entities', pattern: 'src/entities/*', mode: 'folder' },
  { type: 'shared', pattern: 'src/shared/**', mode: 'full' },
];

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
      'boundaries/elements': FSD_LAYERS,
      'import/resolver': {
        typescript: { alwaysTryTypes: true },
      },
    },
    rules: {
      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',
          message:
            '"${file.type}" 레이어에서 "${dependency.type}" 레이어를 import할 수 없습니다. (FSD 의존성 규칙 위반)',
          rules: FSD_LAYERS.map(({ type }, index) => ({
            from: { type },
            allow: { to: { type: FSD_LAYERS.slice(index).map((l) => l.type) } },
          })),
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react'],
            ['^@?\\w'],
            ...FSD_LAYERS.map(({ type }) => [`^@/${type}`]),
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
