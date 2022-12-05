/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
  
    moduleFileExtensions: [ 'js', 'ts', 'json', 'node'],
  
    roots: ["<rootDir>/src"],
  
    transform: {
      '^.+\\.(ts|mjs|js|html)$': 'ts-jest',
    }
  
  };