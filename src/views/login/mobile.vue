<script setup>
const { loginFormRef, loginForm, loginRules, sendCode, sms } = useMobileLogin()
</script>

<template>
	<el-form class="w-[80%]" ref="loginFormRef" :model="loginForm" :rules="loginRules">
		<el-form-item class="py-3" prop="mobile">
			<el-input prefix-icon="User" placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
		</el-form-item>

		<el-form-item class="flex py-3">
			<el-input placeholder="请输入验证码" prefix-icon="Key" class="flex-1" v-model="loginForm.code"></el-input>
			<el-button v-if="!sms.disabled" type="default" @click="sendCode" class="px-2 ml-2">发送验证码</el-button>
			<el-button v-else type="default" disabled class="px-2 ml-2">{{ sms.count }} 秒后重新发送</el-button>
		</el-form-item>

		<el-form-item>
			<el-button class="login-btn">登 录</el-button>
		</el-form-item>
	</el-form>
</template>

<style scoped>
.login-btn {
	@apply w-full bg-gradient-to-b from-cyan-500 to-blue-400 text-white rounded-full;
	height: 40px;
}

.login-btn:hover {
	@apply text-sky-100 bg-gradient-to-b from-cyan-500 to-blue-500;
}
</style>
