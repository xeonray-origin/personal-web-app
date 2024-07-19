/** @type {import("eslint").Linter.Config} */
const config = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'next/core-web-vitals',
		'prettier',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:tailwindcss/recommended',
	],
	rules: {
		'@typescript-eslint/array-type': ['warn', { default: 'generic' }],
		'@typescript-eslint/consistent-type-definitions': 'warn',

		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
			},
		],
		'@typescript-eslint/no-misused-promises': [
			2,
			{
				checksVoidReturn: { attributes: false },
			},
		],
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'eslint/no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'warn',
		'tailwindcss/classnames-order': 'off',
		'tailwindcss/no-custom-classname': 'off',
		'tailwindcss/migration-from-tailwind-2': 'warn',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'react/jsx-key': 'warn',
		'@typescript-eslint/no-unsafe-argument': 'warn',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		'@typescript-eslint/no-unsafe-call': 'warn',
		'tailwindcss/no-contradicting-classname': 'warn',
		'tailwindcss/no-unnecessary-arbitrary-value': 'off',
	},
}

module.exports = config
