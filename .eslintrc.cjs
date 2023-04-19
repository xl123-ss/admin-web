/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		curly: 'error', // 控制语句需要大括号
		'vue/multi-word-component-names': 'off', // 组件名不需要多个单词
		'no-undef': 'off' // 未定义的报错
	}
}
