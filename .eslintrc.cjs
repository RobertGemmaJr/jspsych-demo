module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
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
  settings: {
    // "import/resolver": { node: { extensions: [".js", ".jsx"] } },
  },
  overrides: [{ files: ["*.jsx", "*.js"] }],
};
