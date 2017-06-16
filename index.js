"use strict";

module.exports = {
	extends: "eslint:all",
	env: { commonjs: true },
	parserOptions: { ecmaVersion: 3 },
	rules: Object.assign({}, require("eslint-config-medikoo-es5").rules, {})
};
