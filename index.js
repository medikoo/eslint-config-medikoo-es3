"use strict";

module.exports = {
	extends: "medikoo-es5",
	parserOptions: { ecmaVersion: 3 },
	rules: {
		"dot-notation": ["error", { allowKeywords: false }],
		"quote-props": ["error", "consistent-as-needed", { keywords: true }],
		"no-void": "off"
	}
};
