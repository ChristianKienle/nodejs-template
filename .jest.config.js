module.exports = {
  rootDir: 'src/',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: '../.coverage',
  coverageReporters: ['json', 'html', 'text'],
  collectCoverageFrom: ['!index.js', '**/*.js'],
  coveragePathIgnorePatterns: ['.jest.config.js'],
  // Fail if there is less than 20% branch, line, and function coverage,
  // or if there are more than 20 uncovered statements:
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: -10
    }
  },
  transform: {
  '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js']
};