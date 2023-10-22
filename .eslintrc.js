// Based on config from Ali Alaa with convenience tweaks
// https://github.com/alialaa/wp-blocks-course-plugin-boilerplate/blob/main/.eslintrc
const config = {
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended-with-formatting',
		'prettier',
	],
	rules: {
		// Allow wrapping controls with labels
		// See https://github.com/bradbirdsallCHANGED/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
		'jsx-a11y/label-has-associated-control': [
			2,
			{
				assert: 'either',
			},
		],
	},
	overrides: [
		{
			files: [ 'tests/e2e/*.[tj]s' ],
			extends: [
				'plugin:@wordpress/eslint-plugin/test-playwright',
				'plugin:@typescript-eslint/base',
			],
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: [ './tests/e2e/tsconfig.json' ],
			},
			rules: {
				'@wordpress/no-global-active-element': 'off',
				'@wordpress/no-global-get-selection': 'off',
				'no-restricted-syntax': [
					'error',
					{
						selector: 'CallExpression[callee.property.name="$"]',
						message:
							'`$` is discouraged, please use `locator` instead',
					},
					{
						selector: 'CallExpression[callee.property.name="$$"]',
						message:
							'`$$` is discouraged, please use `locator` instead',
					},
					{
						selector:
							'CallExpression[callee.object.name="page"][callee.property.name="waitForTimeout"]',
						message: 'Prefer page.locator instead.',
					},
				],
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/no-floating-promises': 'error',
				'@typescript-eslint/no-misused-promises': 'error',
			},
		},
	],
};

module.exports = config;
