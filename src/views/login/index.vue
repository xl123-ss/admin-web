<script setup>
import Account from './account.vue'
import Mobile from './mobile.vue'

// 登录类型切换
const loginType = ref('account')
const title = ref('账号密码登录')
const selected = ref(1)

const loginSwitch = type => {
	loginType.value = type
	title.value = loginType.value === 'account' ? '账号密码登录' : '手机短信登录'
	selected.value = loginType.value === 'account' ? 1 : 2
}
</script>

<template>
	<el-row class="login-container f-center">
		<el-col :lg="12" :md="12" class="left">
			<p>Admin Web</p>
			<p class="text-3xl">基于 Vue 3 和 Vite 的后台管理系统</p>
		</el-col>

		<el-col :lg="12" :md="12" class="right">
			<h2 class="title">{{ title }}</h2>

			<div class="f-center py-6">
				<span class="line"></span>
				<button class="text-gray-400 mx-2" @click="loginSwitch('account')" :class="{ active: selected == 1 }">
					账号密码登录
				</button>
				<button class="text-gray-400 mx-2" @click="loginSwitch('mobile')" :class="{ active: selected == 2 }">
					手机短信登录
				</button>
				<span class="line"></span>
			</div>

			<div class="w-[60%] flex flex-col items-center">
				<account v-if="loginType === 'account'"></account>
				<mobile v-if="loginType === 'mobile'"></mobile>
			</div>
		</el-col>
	</el-row>
</template>

<style scoped>
.active {
	@apply text-sky-500 font-bold;
}
.login-container {
	@apply w-full h-screen;
	background-image: url('/login_bg.png');
	background-size: cover;
}

.login-container .left,
.login-container .right {
	@apply flex justify-center items-center flex-col;
}

.login-container .right {
	@apply bg-transparent;
}

.left {
	@apply text-gray-600;
}

.left > p:first-child {
	@apply text-5xl font-bold mb-6;
}

.left > p:last-child {
	@apply text-3xl;
}

.title {
	@apply text-gray-600 text-3xl font-bold mb-3;
}

.line {
	@apply h-[1px] w-24 bg-gray-200;
}
</style>
