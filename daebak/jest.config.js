module.exports = {
    preset: "@vue/cli-plugin-unit-jest",
    moduleFileExtensions: ["js", "json", "vue"],
    transform: {
        "^.+\\.vue$": "@vue/vue2-jest",
        "^.+\\.js$": "babel-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
    ],
    testPathIgnorePatterns: ["/node_modules/"],
    transformIgnorePatterns: [
        "/node_modules/(?!@babel|@vue)",
        "/node_modules/(?!@vue/vue2-jest)",
        "/node_modules/(?!vue-chartjs/)",
    ],
    collectCoverage: true,
    collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
};
process.env.NODE_ENV = "test";
