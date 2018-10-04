module.exports = {
  setupFiles: [ '<rootDir>/tests/setup.js' ],
  testPathIgnorePatterns: [
    '/node_modules/',
    './tests/setup.js',
    './webpack/'
  ],
  moduleNameMapper: {
    "^.+\\.(css|less|sass)$": "identity-obj-proxy"
  }
};
