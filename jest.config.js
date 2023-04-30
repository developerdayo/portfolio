const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}

module.exports = createJestConfig(customJestConfig);

// add Relay when get to GraphQL setup: https://nextjs.org/docs/advanced-features/compiler

module.exports = {
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ['error'],
    }
  }
}
