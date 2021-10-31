module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@ohmygrpc/idl(.*)$': '<rootDir>/src/idl$1',
  },
};
