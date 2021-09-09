module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
  },
  moduleNameMapper: {
    "^@context(.*)$": "<rootDir>/src/context/$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks/$1",
    "^@components(.*)$": "<rootDir>/src/components/$1",
    "^@pages(.*)$": "<rootDir>/src/pages/$1",
    "^@styles(.*)$": "<rootDir>/src/styles/$1",
    "^@generated/(.*)$": "<rootDir>/src/generated/$1",
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `<rootDir>/cypress`,
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
};
