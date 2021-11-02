module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  moduleNameMapper: {
    '^@ohmygrpc/idl(.*)$': '<rootDir>/src/idl$1',
  },
};
