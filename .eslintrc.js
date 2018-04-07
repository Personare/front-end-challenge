module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "comma-dangle": [
      "warn",
      "always-multiline"
    ],
    "semi": [
      "error",
      "always"
    ],
  },
  "env": {
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }
};