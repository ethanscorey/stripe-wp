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
};

module.exports = config;
