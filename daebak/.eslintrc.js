module.exports = {
	root: true,
	env: {
		node: true,
	},
	plugins: [
		"prettier"
	],
	extends: ["plugin:vue/essential", "eslint:recommended", "plugin:prettier/recommended"],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
	},
};
