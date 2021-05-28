module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setupTests.ts'],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
    '\\.svg$': 'svg-jest',
  },
}
