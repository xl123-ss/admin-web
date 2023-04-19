<script setup>
const msg = ref('hello')
</script>

<template>
	<el-row>
		<el-button>Default</el-button>
		<el-button type="primary">Primary</el-button>
		<el-button type="success">Success</el-button>
		<el-button type="info">Info</el-button>
		<el-button type="warning">Warning</el-button>
		<el-button type="danger">Danger</el-button>
		<el-button>中文</el-button>
	</el-row>

	<div class="f-center p-10 mt-10 shadow-xl shadow-gray-400" bg="sky-400">
		<IEpSearch class="text-sky-100 text-2xl"></IEpSearch>
		<IEpRefresh class="text-white text-xl"></IEpRefresh>
		<IEpUser class="text-white text-xl"></IEpUser>
		测试 WindiCSS
	</div>
	<p>{{ msg }}</p>
</template>
