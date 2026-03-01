export default {
  coveragePathIgnorePatterns: [
    "/src/js/characters",
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/__tests__/**/*.ts', '**/*.test.ts'],
};