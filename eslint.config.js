import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Example of disabling a rule
      'no-console': 'off', // Disables the "no-console" rule
      'react/prop-types': 'off', // Disables the "react/prop-types" rule
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Example of configuring a rule (warn instead of error)
      'react/react-in-jsx-scope': 'off',
      indent: ['warn', 2], // Warn if indentation is not 2 spaces
      quotes: ['warn', 'single'], // Warn if single quotes are not used
      semi: ['warn', 'always'], // Warn if semicolons are omitted
      'object-curly-spacing': ['warn', 'always'],
      'space-before-blocks': ['warn', 'always'], // Warn if there is no space before block braces
      'space-in-parens': ['warn', 'never'], // Warn if there is a space inside parentheses
      'no-mixed-spaces-and-tabs': 'warn', // Warn if spaces and tabs are mixed
      'jsx-quotes': ['warn', 'prefer-double'], // Warn if double quotes are not used in JSX attributes
      'react/jsx-indent': ['warn', 2], // Warn if JSX indentation is not 2 spaces
      'react/jsx-indent-props': ['warn', 2],
      'no-var': 'error',
      'prefer-const': 'warn',

      // Add more rules to disable or configure here
    },
  },
];
