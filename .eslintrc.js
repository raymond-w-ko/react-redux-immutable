module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  installedESLint: true,
  parserOptions: {
    ecmaFeatures: { experimentalObjectRestSpread: true, jsx: true },
    sourceType: "module"
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": "off",
    "no-unused-vars": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off"
  },
  settings: {
    react: { createClass: "createClass", pragma: "React", version: "15.0" }
  }
};
