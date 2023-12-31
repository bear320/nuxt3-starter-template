module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    semi: ['warn', 'always'],
    quotes: ['warn', 'single']
  }
};
