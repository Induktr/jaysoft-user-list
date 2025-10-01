import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import { rules as pluginVueRules } from 'eslint-plugin-vue';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js, tseslint, pluginVue },
    extends: ['js/recommended', 'ts/recommended', 'vue/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/no-v-text': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/no-v-model-event': 'off',
      'vue/no-v-model-value': 'off',
      'vue/no-v-model': 'off',
      'vue/no-v-bind': 'off',
      'vue/no-v-on': 'off',
      'vue/no-v-if': 'off',
      'vue/no-v-for': 'off',
      'vue/no-v-else': 'off',
      'vue/no-v-else-if': 'off',
    },
    ...pluginVueRules,
    ...tseslint.configs.recommended,
  },
  {
    files: ['**/*.vue', '**/*.ts', '**/*.js'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    extends: ['plugin:vue/essential', 'plugin:vue/recommended'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/no-v-text': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/no-v-model-event': 'off',
      'vue/no-v-model-value': 'off',
      'vue/no-v-model': 'off',
      'vue/no-v-bind': 'off',
      'vue/no-v-on': 'off',
      'vue/no-v-if': 'off',
      'vue/no-v-for': 'off',
      'vue/no-v-else': 'off',
      'vue/no-v-else-if': 'off',
    },
    ...pluginVueRules,
    ...tseslint.configs.recommended,
  }
]);
