const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: '.',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@ui/components': '<rootDir>/src/ui/components',
    '^@ui/layouts': '<rootDir>/src/ui/layouts',
    '^@assets/helpers': '<rootDir>/src/assets/helpers',
    '^@assets/interfaces': '<rootDir>/src/assets/interfaces',
    '^@assets/hooks': '<rootDir>/src/assets/hooks',
    '^@assets/styles': '<rootDir>/src/assets/styles'
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
