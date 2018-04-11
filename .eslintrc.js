module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "jsx-a11y/anchor-is-valid": ["warn", {
      "aspects": ["noHref", "invalidHref", "preferButton"]
    }],
    "jsx-a11y/click-events-have-key-events": [
      'warn'
    ],
    'jsx-a11y/no-static-element-interactions': [
      'warn'
    ],
    "jsx-a11y/anchor-has-content": ["warn"],
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
