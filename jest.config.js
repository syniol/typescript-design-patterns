module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(.*)(example).(ts)$',
    collectCoverageFrom: ['src/**/*.ts'],
    collectCoverage: false,
}
