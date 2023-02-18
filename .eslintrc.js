module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
    '@react-native-community'
  ],
  rules: {
    quotes: ["error", "double"],
  },
  
  // Newly added property
  parserOptions: {
    "ecmaVersion": 2020,
  },
};
