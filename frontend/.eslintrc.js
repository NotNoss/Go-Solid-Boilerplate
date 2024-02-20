module.exports = {
	"env": { "browser": true },
	"extends": [
		"eslint:recommended",
		"airbnb-base",
		"airbnb-typescript/base",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:@typescript-eslint/strict",
		"plugin:solid/typescript",
		"plugin:prettier/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": { "project": ["./tsconfig.json"] },
	"plugins": ["@typescript-eslint", "solid"],
	"rules": { 
		"import/extensions": [ "error", "ignorePackages", { "": "never" } ],
		"prettier/prettier": [ "error", { "endOfLine" : "auto" } ],
		"quotes": ["error", "single"],
		"@typescript-eslint/quotes": ["error", "single"]

	}
};
