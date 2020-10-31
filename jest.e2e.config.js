const rootConfig = require('./jest.config')

module.exports = {
  ...rootConfig,
  testRegex: '/e2e/.*\\.test\\.[jt]sx?$',
  testPathIgnorePatterns: ['/node_modules/'],
}
