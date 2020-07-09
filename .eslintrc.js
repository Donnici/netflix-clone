module.exports = {
	root: true,
	env: {
		'react-native/react-native': true,
		es6: true
	},
	extends: [
		'@react-native-community',
		'plugin:react/recommended',
		'airbnb'
		// 'prettier',
		// 'prettier/react',
	],
	plugins: [
		'react',
		'react-native',
		'import-helpers',
		'eslint-plugin-import-helpers'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		'import/resolver': {
			'babel-plugin-root-import': {
				rootPathSuffix: 'src'
			}
		}
	},
	rules: {
		indent: [
			'error',
			'tab',
			{ SwitchCase: 1, ignoredNodes: ['JSXElement'] }
		],
		'no-tabs': 'off',
		'no-shadow': 'off',
		'comma-dangle': [
			'error',
			{
				arrays: 'never',
				objects: 'never',
				imports: 'never',
				exports: 'never',
				functions: 'never'
			}
		],
		'no-underscore-dangle': 'off',
		'jsx-quotes': 'off',
		'prettier/prettier': 0,
		'react/button-has-type': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/forbid-prop-types': 'off',
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-filename-extension': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-named-default': 'off',
		'import/prefer-default-export': 'off',
		'import-helpers/order-imports': [
			'error',
			{
				newlinesBetween: 'always',
				groups: [
					'/^react/',
					'module',
					'/^~/',
					['parent', 'sibling', 'index']
				],
				alphabetize: { order: 'asc', ignoreCase: true }
			}
		]
	}
};
