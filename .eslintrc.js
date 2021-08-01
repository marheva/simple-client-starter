module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  rules: {
    "no-unused-expressions": 0,
    "jsx-quotes": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "linebreak-style": 0,
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
  },
};
