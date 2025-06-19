import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react' // Added
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    // This is the main configuration object for TS/TSX files
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked, // Changed
      ...tseslint.configs.stylisticTypeChecked, // Added
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: { // Added
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react, // Added
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules, // Added
      ...react.configs['jsx-runtime'].rules, // Added
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Consider adding/keeping other specific rules if needed
      // e.g. 'react/prop-types': 'off' if using TypeScript interfaces primarily
    },
    settings: { // Added
      react: {
        version: '18.3',
      },
    },
  },
  // If there are other configurations, e.g., for JS files, they would go here
  // For example, a separate config for .js files if they exist and need different rules
)
