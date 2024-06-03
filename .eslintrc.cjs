module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:import/recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2023,
  },
  rules: {
    "no-unused-vars": "warn",
    "import/order": "warn",
  },
  overrides: [{ files: ["*.js"] }],
};
