import { FlatCompat } from '@eslint/eslintrc';
const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
const config = [
  { ignores: ['.arena/**', '.next/**', 'node_modules/**', 'test-results/**', 'playwright-report/**', 'next-env.d.ts'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  { rules: { '@next/next/no-html-link-for-pages': 'off' } },
];

export default config;
