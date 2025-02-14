import { eslint } from '@siberiacancode/eslint';

export default eslint(
  {
    typescript: true,
    jsx: true,
    react: true,
    stylistic: true
  },
  {
    rules: {
      'node/prefer-global/process': ['error', 'always'],
      'siberiacancode-react/prop-types': 'off'
    }
  }
);
